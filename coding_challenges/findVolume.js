Array.prototype.getMaxIdx = function() {
	let max = this[0];
	let idx = 0;
	for(let i = 1; i < this.length; i++) {
		if(max < this[i]) {
			max = this[i];
			idx = i;
		}
	}
	return idx;
}

function findVolume(arr) {
	let max = arr.getMaxIdx();
	let side = 0;
	let cur = 1;
	let vol = 0;

	// Test left side
	while(cur < max) {
		if(arr[cur] < arr[side]) {
			vol += arr[side]-arr[cur];
		} else {
			side = cur;
		}
		cur += 1
	}

	// Test right side
	side = arr.length - 1;
	cur = side-1;
	while(cur > max) {
		if(arr[cur] < arr[side]) {
			vol += arr[side]-arr[cur];
		} else {
			side = cur;
		}
		cur -= 1
	}
	return vol;
}

console.log(findVolume([3,10,5,2,10,4,2,10]));