function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 4;
  this.maxSpeed = 10;
  this.maxforce = 1;
}
Vehicle.prototype.behaviors = function() {
  let arrive = this.arrive(this.target);
  let mouse = p.createVector(p.mouseX, p.mouseY);
  let flee = this.flee(mouse);
  arrive.mult(1);
  flee.mult(5);
  this.applyForce(arrive);
  this.applyForce(flee);
};
Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
};
Vehicle.prototype.flee = function(target) {
  let desired = p5.Vector.sub(target, this.pos);
  if (desired.mag() < 50) {
    desired.setMag(this.maxSpeed);
    desired.mult(-1);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return p.createVector(0, 0);
  }
};
Vehicle.prototype.arrive = function(target) {
  let desired = p5.Vector.sub(target, this.pos);
  let distance = desired.mag();
  let speed = this.maxSpeed;
  if (distance < 100) {
    speed = p.map(distance, 0, 100, 0, this.maxSpeed);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0); // clear force
};

Vehicle.prototype.show = function() {
  p.stroke(108, 99, 255);
  p.strokeWeight(this.r);
  p.point(this.pos.x, this.pos.y);
};
