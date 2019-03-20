
export const isundef = (o) => {
	return o === null || typeof(o) === 'undefined';
};

export const isvalid = (o) => {
	return !isundef(o);
};

export const hasString = (o) => {
	return o !== '' && isvalid(o);
};

export const makeMap = (list, keyName) => {
	let map = {};

	for (let i = 0; i < list.length; ++i) {
		const item = list[i];
		map[item[keyName]] = item;
	}

	return map;
};


export const nvl = (str, val) => {
	return (str) ? str : val;
};


export const nvl2 = (str, val) => {
	return (!isvalid(str) || '' === str) ? val : str;
};


export const tickCount = () => {
	return new Date().getTime();
};


export const istrue = (v) => {
	return isvalid(v) && v;
};


export const hasKey = (obj, key) => {
	return obj ? hasOwnProperty.call(obj, key) : false;
};


export const uuid4 = () => {
	// return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
	let uuid = '', ii;

	for (ii = 0; ii < 32; ii += 1) {
		switch (ii) {
			case 8:
			case 20:
				uuid += '-';
				uuid += (Math.random() * 16 | 0).toString(16);
				break;
			case 12:
				uuid += '-';
				uuid += '4';
				break;
			case 16:
				uuid += '-';
				uuid += (Math.random() * 4 | 8).toString(16);
				break;
			default:
				uuid += (Math.random() * 16 | 0).toString(16);
		}
	}

	return uuid;
};


// returns true if val is in [f, t)
export const isBetween = (val, f, t) => {
	return f <= val && val < t;
}


export const isIn = (val, valList) => {
	if (!isvalid(val) || !isvalid(valList)) return false;

	for (let i = 0; i < valList.length; ++i) {
		if (valList[i] === '' + val) return true;
	}

	return false;
};


export const isInArray = (valList1, valList2) => {
	if (!isvalid(valList1) || !isvalid(valList2)) return false;

	for (let i = 0; i < valList1.length; ++i) {
		if (isIn(valList1[i], valList2)) {
			return true;
		}
	}

	return false;
};


export const getIndexInList = (val, valList) => {
	if (!isvalid(val)) return -1;

	for (let i = 0; i < valList.length; ++i) {
		if (valList[i] === '' + val) return i;
	}

	return -1;
};


export const nextValueInList = (val, valList) => {
	if (valList.length < 1) {
		return null;
	} else if (valList.length === 1) {
		return valList[0];
	}

	const nextIdx = getIndexInList(val, valList) + 1;
	if (nextIdx < valList.length ) {
		return valList[nextIdx];
	}

	return valList[0];
};


export const makeid = (digitNum) => {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < digitNum; ++i) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
};


// 출처: https://stove99.tistory.com/113 [스토브 훌로구]
export const numberWithCommas = (x) => {
	var reg = /(^[+-]?\d+)(\d{3})/;
  var n = (x + '');

  while( reg.test(n) )
  	n = n.replace(reg, '$1,$2');

  return n;
}


export const calcDigits = (n) => {
	return Math.log(n) * Math.LOG10E + 1 | 0;
}


export const calcDigitsWithCommas = (x) => {
	const d = calcDigits(x)
	return d + Math.floor((d - 1) / 3);
}
