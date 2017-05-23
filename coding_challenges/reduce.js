Array.prototype.reduce = function(cb, initVal) {
	let i = 0;
	let accum = initVal;
	if(typeof initVal != "number") {
		accum = this[i];
		i++;
	}
	for(i; i < this.length; i++) {
		accum = cb(accum, this[i]);
	}
	return accum;
}

let a = [1,2,3,4];
let res = a.reduce((accum, el) => {
	return accum *= el;
}, -1);

console.log(res);