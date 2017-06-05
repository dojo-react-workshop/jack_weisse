const balance = (arr)=>{
	let leftIdx = 0;
	let rightIdx = arr.length-1;
	let left = arr[leftIdx++];
	let right = arr[rightIdx--];
	while(leftIdx <= rightIdx) {
		if(left > right) {
			right += arr[rightIdx--];
		} else {
			left += arr[leftIdx++];
		}
	}
	return (left === right);
}

let a = [1,2,3,4,-10];
// console.log(balance(a));

const balancePoint = (arr)=>{
	let sum = arr.reduce((accum,el)=>{
		return accum+=el;
	});

	let sum2 = 0;

	for(let i = 0; i < arr.length-1; i++) {
		sum2 += arr[i];
		sum -= arr[i];
		console.log(sum,sum2);
		if(sum === sum2) {
			return true;
		}
	}
	return false;
}

console.log(balancePoint(a));