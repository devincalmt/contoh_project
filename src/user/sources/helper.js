export const generateListNum = (start, end, diff) => {
    var numlist = []
    while ((diff > 0 ? start <= end : end <= start)) {
        numlist.push(start);
        start += diff;
    }
    return numlist
}

Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {
		s = '0' + s;
	}
	return s;
};