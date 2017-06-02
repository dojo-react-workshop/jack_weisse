const inOrd = (str, sub="", results=[])=>{

}

function subsets(str=""){ // Jason's code
	if(str.length===0) {
		return [""];
	}
	let subs = subsets(str.slice(1));
	let count = subs.length;
	for(let i=0; i < count; i++) {
		subs.push(str.slice(0,1) + subs[i]);
	}
	return subs;
}