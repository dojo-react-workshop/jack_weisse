function copyStr(str,idx,char) {
	let newStr = "";
	for(let i = 0; i < str.length; i++) {
		if(i===idx) {
			newStr += char;
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

// function binStr(str,i=0,res=[]) {
// 	if(i>=str.length) {
// 		res.push(str);
// 		return res;
// 	}
// 	if(str[i] === "?") {
// 		binStr(copyStr(str,i,"0"),i+1,res);
// 		binStr(copyStr(str,i,"1"),i+1,res);
// 	} else {
// 		binStr(str,i+1,res);
// 	}
// 	return res;
// }

function binStr(str,i=0,res=[]) {
	while(i < str.length) {
		if(str[i] === "?") {
			binStr(copyStr(str,i,"0"),i+1,res);
			binStr(copyStr(str,i,"1"),i+1,res);
			return res;
		}
		i++;
	}
	res.push(str);
	return res;
}

let s = "??";

console.log(binStr(s));

function binStrCharlie(str,arr=[]) {
	const firstQ  = str.indexOf("?");
	if(firstQ<0) {
		arr.push(str);
		return arr;
	}

	const left = str.slice(0,firstQ);
	const right = str.slice(firstQ+1,str.length);

	binStrCharlie(left+"0"+right,arr);
	binStrCharlie(left+"1"+right,arr);

	return arr;
}

// console.log(binStrCharlie(s));

function binString1(s, i = 0)
{
    if(i >= s.length)
    {
        console.log(s);
        return;
    }
    if(s[i] == '?')
    {
        var s0 = s.substring(0, i) + "0" + s.substring(i+1, s.length);
        // console.log(`str0: ${str0}`)
        binString1(s0, i+1);

        // console.log(`made it to the one`)
        var s1 = s.substring(0, i) + "1" + s.substring(i+1, s.length);
        // console.log(`str1: ${str1}`)
        binString1(s1, i+1);
    }
    else
    {
        binString1(s, i+1);
    }
}
// binString1("??");
// console.log("Done");
