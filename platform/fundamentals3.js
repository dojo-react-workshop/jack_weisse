function personConstructor(n) {
	return {
		name: n,
		distance_traveled: 0,
		say_name: function(){
			console.log(this.name);
		},
		say_something: function(str) {
			console.log(`${this.name} says '${str}'`);
		},
		walk: function() {
			console.log(`${this.name} is walking`);
			this.distance_traveled += 3;
			return this.distance_traveled;
		},
		run: function() {
			console.log(`${this.name} is running`);
			this.distance_traveled += 10;
			return this.distance_traveled;
		},
		crawl: function() {
			console.log(`${this.name} is crawling`);
			this.distance_traveled += 1;
			return this.distance_traveled;
		}
	}
}

function ninjaConstructor(n) {
	return {
		name: n,
		cohort: "none",
		beltLevel: "yellow",
		levelUp: function(){
			var belts = ["yellow", "green", "brown", "white", "black"];
			if(this.beltLevel === "black") {
				console.log("At highest level");
				return;
			}
			let cur = belts.indexOf(this.beltLevel);
			this.beltLevel = belts[cur+1];
			console.log(`you are now a ${this.beltLevel} belt`);
		}
	}
}

let ninja = ninjaConstructor("terd");
ninja.levelUp();