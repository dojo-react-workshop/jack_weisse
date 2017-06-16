function getChange(amt, denom, ans="", res=[]) {
	if(amt===0) {
		res.push(ans);
		return res;
	}
	if(denom.length <= 0 || amt < 0) {
		return res;
	}
	if(denom[0] <= amt) {
		getChange(amt-denom[0],denom,ans+denom[0],res);
	}
	getChange(amt,denom.slice(1),ans,res);
	return res;
}

console.log(getChange(7,[7,9,1]));

function charlieCoins(amount, denominations) {
	let waysToMakeChange = 0;
	const previousAnswers = {};

	recursiveWayToMakeChange(amount, 0);
	return waysToMakeChange;

	function recursiveWayToMakeChange(amount, coinIndex) {
		if(previousAnswers[`${denominations[coinIndex]}-${amount}`]) {

		}
		if(amount === 0) {
			waysToMakeChange += 1;
			return;
		}
		if(coinIndex === denominations.length) {
			return;
		}

		const currentDenomination = denominations[coinIndex];
		if(currentDenomination <= amount) {
			recursiveWayToMakeChange(amount-currentDenomination,coinIndex);
		}
		recursiveWayToMakeChange(amount,coinIndex+1);
	}
}

// console.log(charlieCoins(5,[1,2,3]));