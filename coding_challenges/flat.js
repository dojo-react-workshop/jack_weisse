const flat = (arr,res=[])=>{
	if(!Array.isArray(arr)) {
		res.push(arr);
		return;
	} else {
		for(let i = 0; i < arr.length; i++) {
			flat(arr[i],res);
		}
	}
	return res;
}

let a = [1,2,[3,[4,5]]];

console.log(flat(a));