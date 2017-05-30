function getMaxProfit(arr) {
	let buy = 0;
	let sell = 0;
	let max = null;
	for(let i = 0; i < arr.length; i++) {
		buy = arr[0];
		for(let j = i+1; j < arr.length; j++) {
			sell = arr[j];
			if(!max || max < sell-buy) {
				max = sell-buy;
			}
		}
	}
	return max;
}

let a = [10,7,5,8,11,9];
console.log(getMaxProfit(a));
let b = [10,9,8,7,6,5];
console.log(getMaxProfit(b));