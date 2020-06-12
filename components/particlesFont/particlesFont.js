import React, { Component, useState, useEffect } from "react";
import Sketch from "react-p5";
//import fontik from "./AvenirNextLTPro-Demi.otf";
import { Vector } from "p5";

export default class ParticlesFont extends Component {

  theme = this.props.theme
  width = this.props.width;
  height = this.props.height;
  vehicles = [];
  gravityOn = false;
  gravity;
  mytext;
  preload = p5 => {
    p5.font = p5.loadFont("./AvenirNextLTPro-Demi.otf");
  };
  setup = (p5, canvasParentRef) => {
    // p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.createCanvas(this.width, this.height).parent(canvasParentRef);
    this.props.theme ? p5.background(39, 38, 65) : p5.background(255, 255, 25)
    p5.textFont(p5.font);

    var points = p5.font.textToPoints(
      "JS HTML CSS",
      this.width / 5.5,
      this.height / 2 + 50,
      92,
      {
        sampleFactor: 0.2,
        simplifyThreshold: 0
      }
    );

    class Vehicle {
      constructor(x, y) {
        this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.target = p5.createVector(x, y);
        this.vel = p5.createVector(p5.random(3), p5.random(3));
        this.acc = p5.createVector();
        this.r = 2.5;
        this.maxSpeed = 10;
        this.maxforce = 1;
      }

      colideWithEdges = function () {
        if (this.pos.y >= p5.height) {
          this.pos.y = p5.height - this.r / 2;
          this.vel.y *= -0.5;
        }
        if (this.pos.x >= p5.width) {
          this.pos.x = p5.width;
          this.vel.x *= -0.5;
        } else if (this.pos.x <= 0) {
          this.pos.x = 0;
          this.vel.x *= -0.5;
        }
      };
      behaviors = function () {
        let arrive = this.arrive(this.target);
        let mouse = p5.createVector(p5.mouseX, p5.mouseY);
        let flee = this.flee(mouse);
        arrive.mult(1);
        flee.mult(5);
        this.applyForce(arrive);
        this.applyForce(flee);
      };
      flee = function (target) {
        let desired = Vector.sub(target, this.pos);
        if (desired.mag() < 50) {
          desired.setMag(this.maxSpeed);
          desired.mult(-1);
          let steer = Vector.sub(desired, this.vel);
          steer.limit(this.maxforce);
          return steer;
        } else {
          return p5.createVector(0, 0);
        }
      };
      applyForce = function (f) {
        this.acc.add(f);
      };
      arrive = function (target) {
        let desired = Vector.sub(target, this.pos);
        let distance = desired.mag();
        let speed = this.maxSpeed;
        if (distance < 100) {
          speed = p5.map(distance, 0, 100, 0, this.maxSpeed);
        }
        desired.setMag(speed);
        let steer = Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
      };
      update = function () {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0); // clear force
      };
      show = function () {
        p5.stroke(0, 102, 153);
        p5.strokeWeight(this.r);
        p5.point(this.pos.x, this.pos.y);
      };
    }
    points.forEach(point => {
      let vehicle = new Vehicle(point.x, point.y);
      this.vehicles.push(vehicle);
    });

    class Text extends Vehicle {
      constructor(x, y, stringText) {
        super(x, y);
        this.pos = p5.createVector(x, y);
        this.textSize = p5.textSize(22);
        this.text = stringText;
      }

      show = () => {
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.noStroke();
        p5.fill(0, 102, 153);
        p5.text(
          `${this.text ? this.text : "Good luck"}`,
          this.pos.x,
          this.pos.y
        );
      };
    }
    points.forEach(point => {
      let vehicle = new Vehicle(point.x, point.y);
      this.vehicles.push(vehicle);
      // p5.stroke(108, 99, 255);
      // p5.strokeWeight(4);
      // p5.point(p.x, p.y);
    });
    this.myText = new Text(p5.width / 2, p5.height / 4, "GRAVITY: Off (Space)");
  };
  draw = p5 => {
    this.props.theme ? p5.background(238, 238, 238) : p5.background(39, 38, 65)
    this.myText.update();
    this.myText.colideWithEdges();
    this.myText.show();
    if (this.gravityOn) {
      let gravity = p5.createVector(0, p5.random(0.6));
      this.myText.applyForce(gravity);
      this.myText.text = "GRAVITY: ON (Space)";
    } else {
      this.myText.behaviors();
      this.myText.text = "GRAVITY: OFF (Space)";
    }

    this.vehicles.forEach(vehicle => {
      vehicle.update();
      vehicle.colideWithEdges();
      vehicle.show();
      if (this.gravityOn) {
        let gravity = p5.createVector(p5.random(-0.35, 0.35), p5.random(1));
        vehicle.applyForce(gravity);
      } else {
        vehicle.behaviors();
      }
    });
  };
  state = { resized: true, width: window.innerWidth };
  handleResite = () => {
    this.setState({
      resized: true
    });
  };
  handlePress = p5 => {
    console.log(p5.keyCode);
    if (p5.keyCode === 32) {
      this.gravityOn = !this.gravityOn;
    }
    console.log(this.gravityOn);
  };
  handleWindowResize = () => {
    this.setState({ width: window.innerWidth })
    console.log(this.state.width)
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
  render() {
    return this.state.resized && this.state.width > 1024 ? (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        preload={this.preload}
        windowResized={this.handleResite}
        keyReleased={this.handlePress}
      />
    ) : (
        <div>Loading..</div>
      );
  }
}
