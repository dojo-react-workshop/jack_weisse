const ana = (inStr, anaStr="", res=[])=>{
	if(inStr === "") {
		res.push(anaStr);
	} else {
		for(let i = 0; i < inStr.length; i++) {
			const tAnaStr = anaStr+inStr[i];
			const tInStr = inStr.slice(0,i)+inStr.slice(i+1);
			ana(tInStr,tAnaStr,res);
		}
	}
	return res;
}

console.log(ana("abc"));