function formattingPrice(item) {
	item = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(item / 100);
	return item;
}


function pricePerQuantity(article, quantity) {
	let prix = article * quantity;

	//formattingPrice(item);
	return prix;
}


