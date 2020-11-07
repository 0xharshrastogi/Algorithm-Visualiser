class BarContainer {
	constructor() {
		this.barElement = (() => {
			const element = document.createElement("section");
			element.classList.add("container");
			element.id = "bars-container";

			return element;
		})();
	}

	push = (barObject) => {
		if (!Bar.isBar(barObject)) {
			throw new Error("Passed Value Is Not Instance Of Bar");
		}
		// console.log(barObject);
		this.barElement.appendChild(barObject.barElm);
	};
}
