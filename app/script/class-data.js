class DataSet {
	constructor() {
		this.dataField = [];
	}

	push(barID, value) {
		this.dataField.push({
			barID,
			value,
		});
	}
}
