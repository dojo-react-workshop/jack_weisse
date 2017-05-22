function runningLogger() {
	console.log("I am running");
}

function multiplyByTen(num) {
	return num*10;
}
multiplyByTen(5);

function stringReturnOne() {
	return "I am number 1";
}

function stringReturnTwo() {
	return "I am number 2";
}

function caller(cb) {
	if(typeof cb === "function") {
		cb();
	}
}

var myDoubleConsoleLog = function(cb1, cb2) {
	if(typeof cb1 === "function" && typeof cb2 === "function") {
		console.log(cb1());
		console.log(cb2());
	}
}

function caller2(par) {
	console.log("starting");
	if(typeof par === "function") {
		setTimeout(par, 2000);
		console.log("ending?")
	}
	return "interesting";
}

caller2(myDoubleConsoleLog);