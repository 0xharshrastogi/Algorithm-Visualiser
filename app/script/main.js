function insertBox() {
	const barContainerObject = new BarContainer(),
		primaryContElm = document.getElementById("primary-container");

	primaryContElm.appendChild(barContainerObject.barElement);

	return barContainerObject;
}

function setup(count) {
	const barContainerObject = insertBox();
	let i = count;
	while (i--) {
		barContainerObject.push(new Bar());
	}
}
