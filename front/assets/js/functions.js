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


//Fonction pour supprimer un article du panier
function deleteItem(){

	const supprimer = Array.from(
		document.querySelectorAll(".suppression"));

	supprimer.forEach((supp) => {
		supp.addEventListener("click", (e) => {
			for (let i = 0; i < supprimer.length; i++) {
				if (supprimer[i] === e.target) {
					const keyToDelete =
						e.target.classList[
							e.target.classList.length - 1
						];
	
					localStorage.removeItem(keyToDelete);
					document.location.reload();
				}
			}
		});
	});
}