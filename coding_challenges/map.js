Array.prototype.map = function(cb) {
	let newArr = [];
	this.forEach(function(el) {
		newArr.push(cb(el));
	});
	return newArr;
}

const a = [1,2,3,4,5,6,7,8,9];

console.log(a.map(function(el) {
	return el *= 2;
}));