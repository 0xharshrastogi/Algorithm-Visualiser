class Bar {
	constructor(barId, height) {
		if (!barId) {
			throw new Error("BAR-ID not passed as an argument");
		}

		this.barElm = (() => {
			const ele = document.createElement("div");
			ele.className = "bar";
			ele.id = `${barId || NaN}`;

			const parentHeight = document.getElementById("bars-container")
				.clientHeight;

			ele.style.height = `${Math.round(
				parentHeight * Math.random() - 16
			)}px`;

			return ele;
		})();

		this.isActive = true;
	}

	static isBar = (barObj) => {
		return barObj instanceof Bar ? true : false;
	};
}
