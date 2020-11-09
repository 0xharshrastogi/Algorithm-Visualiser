class BarContainer {
	constructor() {
		this.barElement = (() => {
			const element = document.createElement("section");
			element.classList.add("container");
			element.id = "bars-container";

			return element;
		})();
	}

	push = (barElement) => {
		this.barElement.appendChild(barElement);
	};
}
