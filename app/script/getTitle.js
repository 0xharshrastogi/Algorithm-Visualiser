// Gets The Title Of Document And Puts Into Element Who ID is Title

class DocumentTitle {
	constructor() {
		this.title = document.title;

		document.getElementById("title").innerText = this.title;
	}
}

const newDocumentTitle = new DocumentTitle();
