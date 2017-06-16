const stringChange = (str) =>{
	let newStr = str.toLowerCase();
	let idx = newStr.indexOf(" ");
	while(idx !== -1) {
		newStr = newStr.slice(0,idx)+newStr.slice(idx+1);
		idx = newStr.indexOf(" ");
	}
	return newStr;
}

console.log(stringChange("Jack Weisse"));