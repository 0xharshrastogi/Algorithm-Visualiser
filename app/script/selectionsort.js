// function selectionSort() {
// 	// const arr = globalVar.dataSet.dataField;
// 	const arr = [6, 2, 7, 1, 8];
// 	console.log(arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		let small = i;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			small = arr[j] < arr[small] ? j : small;
// 		}

// 		const tmp = arr[small];

// 		arr[small] = arr[i];
// 		arr[i] = tmp;
// 		console.log(arr);
// 	}
// }

function selectionSort() {
	const arr = globalVar.dataSet.dataField;
	let small;
	console.log(arr);

	for (let i = 0, len = arr.length; i < len; i++) {
		small = i;
		for (let j = i + 1; j < len; j++) {
			small = arr[j].value < arr[small].value ? j : small;
		}

		alterHeightOfElement(arr[small].barID, arr[i].barID);
		const tmp = arr[small];
		arr[small] = arr[i];
		arr[i] = tmp;
		smallest = small;
	}

	// console.log(arr[0]);
}

const alterHeightOfElement = (smallestValID, ID) => {
	const smallestValElm = document.getElementById(`bar${smallestValID}`),
		elm = document.getElementById(`bar${ID}`);
	console.log("Smallest", smallestValElm);
	console.log("TO BE", elm);

	console.log(elm.style.height, smallestValElm.style.height);

	const elmHeight = elm.style.height;
	elm.style.height = smallestValElm.style.height;
	smallestValElm.style.height = elmHeight;
	console.log(elm.style.height, smallestValElm.style.height);
};
//todo
