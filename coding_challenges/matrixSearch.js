function matrixSearch(LA, SA) {
	for(let i = 0; i < LA.length-SA.length; i++) {
		for(let j = 0; j < LA[i].length; j++) {
			let matches = true;
			for(let m = 0; m < SA.length; m++) {
				for(let n = 0; n < SA[m].length; n++) {
					if(LA[i+m][j+n] !== SA[m][n]) {
						matches = false;
						break;
					}
				}
				if(matches === false) {
					break;
				}
			}
			if(matches === true) {
				return true;
			}
		}
	}
	return false;
} 

let largeArray = [
[1,2,3,4,5,6,7,8,9],
[7,8,9,1,2,3,4,5,6],
[4,5,6,7,8,9,1,2,3],
[9,1,2,3,4,5,6,7,8],
[6,7,8,9,1,2,3,4,5],
[3,4,5,6,7,8,9,1,2],
[8,9,1,2,3,4,5,6,7],
[5,6,7,8,9,1,2,3,4],
[2,3,4,5,6,7,8,9,1]
];

let smallArray = [
[3,4,5,6,7,8,9,1,2],
[5,6,7,8,9,1,2,3,4]
];

console.log(matrixSearch(largeArray,smallArray));