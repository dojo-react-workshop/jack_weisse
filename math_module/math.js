const myObj = {};

myObj.sum = (x,y) => {
	return x+y;
}

myObj.product = (x,y) => {
	return x*y;
}

myObj.square = (x) => {
	return myObj.product(x,x);
}

myObj.rand = (x,y) => {
	return Math.floor(Math.random()*(y-x+1))+x;
}

module.exports = myObj;