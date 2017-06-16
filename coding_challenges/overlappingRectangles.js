const rect1 = {

}


function overlapRect(r1,r2) {
	if(!overlap(r1,r2)) {
		return null;
	}
	const newX = ((r1.x > r2.x) ? r1.x : r2.x);
	const newY = ((r1.y > r2.y) ? r1.y : r2.y);
	const newWidth = ((r1.x + r1.width > r2.x + r2.width) ? r2.x + r2.width - newX : r1.x + r1.width - newX);
	const newHeight = ((r1.y + r1.width > r2.y + r2.width) ? r2.y + r2.width - newY : r1.y + r1.width - newY);

	return {
		x: newX,
		y: newY,
		width: newWidth,
		height: newHeight
	}
}

function overlap(r1,r2) {
	if((r1.x <= r2.x && r1.x+r1.width >= r2.x) && (r1.y <= r2.y && r1.y+r1.height >= r2.y)) {
		return true;
	}
	if((r2.x <= r1.x && r2.x+r2.width >= r1.x) && (r2.y <= r1.y && r2.y+r2.height >= r1.y)) {
		return true;
	}
	return false;
}

function charlieRect(r1,r2) {
	const xOverlap = getOverlap(r1.x,r1.width,r2.x,r2.width);
	const yOverlap = getOverlap(r1.y,r1.height,r2.y,r2.height);
	if(xOverlap === null || yOverlap === null) {
		return null;
	}

	return {
		x: xOverlap.start,
		y: yOverlap.start,
		width: xOverlap.length,
		height: yOverlap.length
	}
}

function getOverlap(pt1,l1,pt2,l2) {
	const start = Math.max(pt1,pt2);
	const end = Math.min(pt1+l1, pt2+l2);

	if(start >= end) {
		return null;
	}

	return {
		start,
		length: end-start
	}
}

function multiOverlap(...rectangles) {
	return rectangles.reduce((runningOverlap,curRect)=>{
		if(runningOverlap === null) {
			return null;
		}
		const xOverlap = getOverlap(
			runningOverlap.x,
			runningOverlap.width,
			curRect.x,
			curRect.width
		);
		const yOverlap = getOverlap(
			runningOverlap.y,
			runningOverlap.height,
			curRect.y,
			curRect.height
		);
		if(xOverlap === null || yOverlap === null) {
			return null;
		}
		return {
			x: xOverlap.start,
			y: yOverlap.start,
			width: xOverlap.length,
			height: yOverlap.length
		}
	});
}