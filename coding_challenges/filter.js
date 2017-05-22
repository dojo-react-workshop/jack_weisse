Array.prototype.filter = function(cond) {
	let newArr = [];
	this.forEach(function(el) {
		if(cond(el)) {
			newArr.push(el);
		}
	})
	return newArr;
}

const a = [1,2,3,4,5,6,7,8,9];

console.log(a.filter(function(el) {
	return (el%2 === 0);
}));