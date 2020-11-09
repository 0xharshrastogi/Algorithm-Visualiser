const globalVar = {
	dataSet: new DataSet(),
};

function insertBox() {
	const barContainerObject = new BarContainer(),
		primaryContElm = document.getElementById("primary-container");

	const ifIsAlreadyExist = document.getElementById("bars-container");
	if (ifIsAlreadyExist) {
		ifIsAlreadyExist.remove();
	}

	const controMenuElm = document.getElementById("control-menu");
	// primaryContElm.appendChild(barContainerObject.barElement);
	primaryContElm.insertBefore(barContainerObject.barElement, controMenuElm);

	return barContainerObject;
}

async function setup(count) {
	const barContainerObject = insertBox();
	barContainerObject.barElement.innerHTML = "";
	let i = count;
	while (i--) {
		const newBarElement = new Bar(`bar${i}`),
			newBarValue = parseInt(newBarElement.barElm.style.height);

		setTimeout(barContainerObject.push, 0, newBarElement.barElm);
		globalVar.dataSet.push(i, newBarValue);
	}
}

//set Range Value Id VAlue IN Dom
function getRangeValueInDOM(val) {
	document.getElementById("sampleCountValue").innerText = `${val}`;
}

document.addEventListener("load", () => {
	getRangeValueInDOM(100);
	console.log("hello");
});

//
setTimeout(setup, 0, 10);
// setup(100);
function main() {
	const sampleCountELm = document.getElementById("sampleCount");

	sampleCountELm.addEventListener("mouseup", (e) => {
		setTimeout(setup, 0, sampleCountELm.value);
		getRangeValueInDOM(sampleCountELm.value);
		globalVar.dataSet = new DataSet();
	});

	sampleCountELm.addEventListener("touchstart", (e) => {
		setTimeout(setup, 0, sampleCountELm.value);
		getRangeValueInDOM(sampleCountELm.value);
		globalVar.dataSet = new DataSet();
	});
}

main();
