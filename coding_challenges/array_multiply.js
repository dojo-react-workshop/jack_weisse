function arrayMultiply(arr) {
	let newArr = [];
	let prod = 1;
	for(let i = arr.length-1; i >= 0; i--) {
		newArr[i] = prod;
		prod *= arr[i];
	}
	prod = 1;
	for(let i = 0; i < arr.length; i++) {
		newArr[i] *= prod;
		prod *= arr[i];
	}
	return newArr;
}

const a = [1,2,3,4];
console.log(arrayMultiply(a));