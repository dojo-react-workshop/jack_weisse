function three(arr) {
	const helper = [];
	for(let i = 0; i < arr.length; i++) {
		if(helper[0] === undefined || helper[0] < arr[i]) {
			helper[2] = helper[1];
			helper[1] = helper[0];
			helper[0] = arr[i];
		} else if(helper[1] === undefined || helper[1] < arr[i]) {
			helper[2] = helper[1];
			helper[1] = arr[i];
		} else if(helper[2] === undefined || helper[2] < arr[i]) {
			helper[2] = arr[i];
		}
		if(helper[4] === undefined || helper[4] > arr[i]) {
			helper[3] = helper[4];
			helper[4] = arr[i];
		} else if(helper[3] === undefined || helper[3] > arr[i]) {
			helper[3] = arr[i];
		}
	}
	const pos = helper[0]*helper[1]*helper[2];
	const neg = helper[0]*helper[3]*helper[4];
	return Math.max(pos, neg);
}

console.log(three([-1,-4,-2,-7,-3]));

function threeCharlie(array) {
	if(array.length < 2) {
		throw new Error("must have at least three vals");
	}
	const [first, second, third] = array;
	let highestProductOf2 = first*second;
	let lowestProductOf2 = first*second;
	let highest = Math.max(first,second);
	let lowest = Math.max(first,second);

	return array.reduce((higestProductOf3, val, index)=>{
		if(index < 2) {
			return highestProductOf3;
		}

		highestProductOf3 = Math.max(
			highestProductOf3,
			highestProductOf2*val,
			lowestProductOf2*val
		);

		highestProductOf2 = Math.max(
			highestProductOf2,
			highest * val);

		lowestProductOf2 = Math.min(
			lowestProductOf2,
			lowest * val);

		highest = Math.max(highest,val);
		lowest = Math.min(lowest,val);
		return highestProductOf3;
	},first*second*third);
}