function cityBuilderBrute(arr) {
	const results = [];
	for(let i = 0; i < arr.length; i++) {
		const city = arr[i].city;
		if(results.indexOf(city)<0) {
			results.push(city);
		}
	}
	return results;
}

function cityBuilderObj(arr) {
	const results = {};
	for(let i = 0; i < arr.length; i++) {
		const city = arr[i].city;
		results[city] = city;
	}

	let resArr = [];
	for(let j in results) {
		resArr.push(j);
	}
	return resArray;
}

function cityBuilderReduce(arr) {
	return Object.keys(arr.reduce((accum, personObj)=>{
		let city = personObj.city;
		accum[city] = true;
		return accum;
	}))
}