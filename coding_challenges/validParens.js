function validParens(str) {
	let numOpen = 0;
	for(let i = 0; i < str.length; i++) {
		if(str[i] === "("){
			numOpen += 1;
		} else if(str[i] === ")") {
			numOpen -= 1;
		}
		if(numOpen < 0) {
			return false;
		}
	}
	return true;
}

console.log(validParens("(((())())))"));