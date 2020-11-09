class Bar {
	constructor(barId) {
		if (!barId) {
			throw new Error("BAR-ID not passed as an argument");
		}

		this.barElm = (() => {
			const ele = document.createElement("div");
			ele.className = "bar";
			ele.id = `${barId || NaN}`;

			const parentHeight = document.getElementById("bars-container")
				.clientHeight;

			// ele.style.height = `${Math.round(parentHeight * Math.random() - 21)}px`;
			ele.style.height = `${Math.round(
				(parentHeight - 26) * Math.random() + 10
			)}px`;
			return ele;
		})();

		this.isActive = true;
	}

	static isBar = (barObj) => {
		return barObj instanceof Bar ? true : false;
	};
}
