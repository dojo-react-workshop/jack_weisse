function mergeMeetings(arr) {
	arr.sort((a,b)=>a.startTime - b.startTime);

	return arr.reduce((mergedMeetings, currentMeeting, idx)=>{
		if(mergedMeetings.length === 0){
			mergedMeetings.push(currentMeeting);
			return mergedMeetings;
		}
		const lastMergedMeeting = mergedMeetings[mergedMeetings.length-1];
		if(lastMergedMeeting.endTime >= currentMeeting.startTime){
			lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime,currentMeeting.endTime);
		} else {
			mergedMeetings.push(currentMeeting);
		}
		return mergedMeetings;
	},[]);
}

const a = [
	{
		startTime: 0,
		endTime: 1
	},
	{
		startTime: 2,
		endTime: 5
	},
	{
		startTime: 4,
		endTime: 7
	}
]

console.log(mergeMeetings(a));