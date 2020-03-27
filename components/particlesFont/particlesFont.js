import React, { Component } from "react";
import Sketch from "react-p5";
//import fontik from "./AvenirNextLTPro-Demi.otf";
import { Vector } from "p5";

export default class ParticlesFont extends Component {
  width = this.props.width;
  height = this.props.height;
  vehicles = [];
  preload = p5 => {
    p5.font = p5.loadFont("./AvenirNextLTPro-Demi.otf");
  };
  setup = (p5, canvasParentRef) => {
    console.log(this.props);

    // p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.createCanvas(this.width, this.height).parent(canvasParentRef);
    p5.background(39, 38, 65);
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

    points.forEach(point => {
      let vehicle = new Vehicle(point.x, point.y);
      this.vehicles.push(vehicle);
      // p5.stroke(108, 99, 255);
      // p5.strokeWeight(4);
      // p5.point(p.x, p.y);
    });
    function Vehicle(x, y) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.target = p5.createVector(x, y);
      this.vel = p5.createVector(p5.random(3), p5.random(3));
      this.acc = p5.createVector();
      this.r = 3;
      this.maxSpeed = 10;
      this.maxforce = 1;

      this.behaviors = function() {
        let arrive = this.arrive(this.target);
        let mouse = p5.createVector(p5.mouseX, p5.mouseY);
        let flee = this.flee(mouse);
        arrive.mult(1);
        flee.mult(5);
        this.applyForce(arrive);
        this.applyForce(flee);
      };
      this.flee = function(target) {
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
      this.applyForce = function(f) {
        this.acc.add(f);
      };
      this.arrive = function(target) {
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
      this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0); // clear force
      };
      this.show = function() {
        p5.stroke(108, 99, 255);
        p5.strokeWeight(this.r);
        p5.point(this.pos.x, this.pos.y);
      };
    }
  };
  draw = p5 => {
    //p5.background(51);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    p5.background(39, 38, 65);
    this.vehicles.forEach(vehicle => {
      vehicle.update();
      vehicle.show();
      vehicle.behaviors();
    });
  };
  state = { resized: true };
  handleResite = () => {
    this.setState({
      resized: true
    });
  };
  render() {
    return this.state.resized ? (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        preload={this.preload}
        windowResized={this.handleResite}
      />
    ) : (
      <div>Loading..</div>
    );
  }
}
