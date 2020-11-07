class Bar {
	constructor(barId) {
		if (barId) {
			throw new Error("BAR-ID not passed as an argument");
		}

		this.barElm = (() => {
			const ele = document.createElement("div");
			ele.className = "bar";
			ele.id = `${barId || NaN}`;

			ele.style.height = `${Math.floor(Math.random() * 100)}%`;
			// console.log(ele.style.height);
			return ele;
		})();

		this.isActive = true;
	}

	static isBar = (barObj) => {
		return barObj instanceof Bar ? true : false;
	};
}
