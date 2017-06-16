const setMax = (newNumber,curMax)=>{
	if(curMax === undefined) {
		return newNumber;
	}
	return (newNumber > curMax) ? newNumber : curMax;
}

const setMin = (newNumber,curMin)=>{
	if(curMin === undefined) {
		return newNumber;
	}
	return (newNumber < curMin) ? newNumber : curMin;
}

const setMean = (newNumber,curMean,numberCount)=>{
	if(curMean === undefined) {
		return newNumber;
	}
	let newMean = (curMean*numberCount)+Number(newNumber);
	newMean = newMean/(numberCount+1);
	return newMean;
}

export default {
	setMax,
	setMin,
	setMean
}