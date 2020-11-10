function selectionSort() {
	const arrayElm = globalVar.dataSet.dataField;
	// console.table(arrayElm);
	for (let i = 0, len = arrayElm.length; i < len; i++) {
		let smallest = findSmallest(arrayElm, i);
		// console.log(arrayElm[smallest]);
		swapBars(smallest, i);
		//swapping
		((small, index) => {
			const temp = arrayElm[small];
			arrayElm[small] = arrayElm[index];
			arrayElm[index] = temp;
		})(smallest, i);
		// console.table(arrayElm);
	}
	// console.log(arrayElm);
}

const findSmallest = (arr, startIndex = 0, endIndex) => {
	if (!Array.isArray(arr)) {
		throw new Error("Passed Value Is Not An Array");
	}

	const lengthOfArray = arr.length;

	if (startIndex < 0 || endIndex > lengthOfArray) {
		throw new Error("Invalid Index Passed");
	}

	let smallest = startIndex || 0;
	endIndex = endIndex || lengthOfArray;

	for (let i = startIndex + 1; i < endIndex; i++) {
		if (arr[i].value < arr[smallest].value) {
			smallest = i;
		}
	}

	return smallest;
};

const swapBars = (posA, posB) => {
	if (posA === posB) return;

	const elmA = getBArWithID(`bar${posA}`),
		elmB = getBArWithID(`bar${posB}`);

	console.log(elmA, elmB);
	const temp = { ...elmA };

	setProperties(elmA.elm, elmB);
	setProperties(elmB.elm, temp);
	console.log(elmA, elmB);
};

const getBArWithID = (id) => {
	// console.log(id);
	const elm = document.getElementById(`${id}`);
	if (!(elm instanceof Element)) {
		throw new Error("Passed Is Not A Element");
	}
	return {
		elm,
		height: elm.style.height,
		barID: id,
	};
};

const setProperties = (toElm, fromElmObj) => {
	// console.log(toElm, fromElmObj);
	toElm.style.height = fromElmObj.height;
	toElm.setAttribute("id", fromElmObj.barID);
};
