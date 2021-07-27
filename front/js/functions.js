function formattingPrice(item) {
	item = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(item / 100);
	return item;
}


// Calcul du prix total d'un article selon la quantité choisi
function pricePerQuantity(article, quantity) {
	let prix = article * quantity;
	return prix;
}



//function pour changer la quantité
function chooseQuantity() {
	let plusOne = document.querySelector(".buttonPlusOne");
	let minusOne = document.querySelector(".buttonMinusOne");
	
	plusOne.addEventListener("click", function () {
		qte.value++;
	});
	
	minusOne.addEventListener("click", function () {
		qte.value--;
		if (qte.value < 1) {
			qte.value = 1;
		}
	});
}
//function pour changer la quantité
// function changeQuantiy(article) {
// 	let plusOne = document.querySelector(".buttonChangePlusOne");
// 	let minusOne = document.querySelector(".buttonChangeMinusOne");
	
// 	plusOne.addEventListener("click", function () {
// 		//quantity.value++;
// 		console.log('plus 1');
// 	});
	
// 	minusOne.addEventListener("click", function () {
// 		// 
// 		console.log('moins 1');
// 	});
// }


