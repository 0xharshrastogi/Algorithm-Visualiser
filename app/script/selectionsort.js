function selectionSort() {
	const arrayElm = globalVar.dataSet.dataField;

	console.log(arrayElm);

	for (let i = 0, len = arrayElm.length; i < len; i++) {
		let smallest = findSmallest(arrayElm, i);
		swapBars(smallest, i);

		let temp = smallest;
		arrayElm[smallest] = arrayElm[i];
		arrayElm[i] = arrayElm[temp];
	}
}
// This Function Is Working FIne
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
	if (posA === posB) {
		// console.log("RETURNING");
		return;
	}

	const elmA = getBArWithID(`bar${posA}`),
		elmB = getBArWithID(`bar${posB}`);

	const temp = { ...elmA };

	setProperties(elmA.elm, elmB);
	setProperties(elmB.elm, temp);
};
// fine working
const getBArWithID = (id) => {
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
	toElm.style.height = fromElmObj.height;
	toElm.setAttribute("id", fromElmObj.barID);
};
// console.time("time");
// selectionSort();
// console.timeEnd("time");
