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
		setTimeout(barContainerObject.push, 0, new Bar(`bar${i}`));
	}
}

setTimeout(setup, 0, 200);
// setup(100);
function main() {
	const sampleCountELm = document.getElementById("sampleCount");

	sampleCountELm.addEventListener("mouseup", (e) => {
		console.dir(e);

		setTimeout(setup, 0, sampleCountELm.value);
	});
}

main();
