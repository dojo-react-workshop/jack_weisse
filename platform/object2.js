function Vehicle(nm, wheels, pass, sp){
	var self = this;
	this.name = nm;
	this.numWheels = wheels;
	this.numPassengers = pass;
	this.noise = "";
	this.speed = sp;
	var distance_travelled = 0;
	function updateDistanceTravelled() {
		distance_travelled += self.speed;
	}
	this.move = function() {
		updateDistanceTravelled();
		this.makeNoise();
	}

	this.checkMiles = function() {
		console.log(distance_travelled);
	}
}

Vehicle.prototype.makeNoise = function() {
	console.log(this.noise+"!");
}

Vehicle.prototype.print = function() {
	console.log(this.name, this.numWheels, this.numPassengers);
	this.makeNoise();
}



let bike = new Vehicle("bike",2,1);
bike.noise = "ring ring";

let sedan = new Vehicle("sedan",4,5);
sedan.noise = "Honk Honk";

let bus = new Vehicle("bus", 4, 27);
bus.pickup = function(num) {
	this.numPassengers += num;
}

bike.speed = 5;
bike.move();
bike.checkMiles();