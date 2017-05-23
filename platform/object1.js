function VehicleConstructor(nm, wheels, pass){
	let newV = {};
	newV.name = nm;
	newV.numWheels = wheels;
	newV.numPassengers = pass;
	newV.noise = "";
	newV.makeNoise = function() {
		console.log(this.noise+"!");
	}
	newV.print = function() {
		console.log(this.name, this.numWheels, this.numPassengers);
		this.makeNoise();
	}
	return newV;
}

let bike = VehicleConstructor("bike",2,1);
bike.noise = "ring ring";

let sedan = VehicleConstructor("sedan",4,5);
sedan.noise = "Honk Honk";

let bus = VehicleConstructor("bus", 4, 27);
bus.pickup = function(num) {
	this.numPassengers += num;
}

bike.print();
sedan.print();
bus.print();