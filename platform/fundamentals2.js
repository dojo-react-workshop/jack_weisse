let summer = function(x, y) {
	let start;
	let end;
	if(x<y){
		start = x;
		end = y;
	} else {
		start = y;
		end = x;
	}
	let sum =0;
	for(let i = start; i <= end; i++) {
		sum += i;
	}
	console.log(sum);
	return sum;
}

let minVal = function(arr) {
	let min = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(min > arr[i]) {
			min = arr[i];
		}
	}
	return min;
}

let avg = function(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum/arr.length;
}

let myObj = {
	findSum: summer,
	findMin: minVal,
	findAvg: avg
}

let person = {
	name: "Jack",
	distance_traveled: 0,
}
person.say_name = function(){
	//alert(this.name);
	console.log(this.name);
}
person.say_something = function(str) {
	console.log(`${this.name} says '${str}'`);
}
person.walk = function() {
	console.log(`${this.name} is walking`);
	this.distance_traveled += 3;
	return this.distance_traveled;
}
person.run = function() {
	console.log(`${this.name} is running`);
	this.distance_traveled += 10;
	return this.distance_traveled;
}
person.crawl = function() {
	console.log(`${this.name} is crawling`);
	this.distance_traveled += 1;
	return this.distance_traveled;
}

person.say_name();
person.say_something("Hello");
person.walk();
person.run();
person.crawl();
console.log(person.distance_traveled);