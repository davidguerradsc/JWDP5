// Page panier

// Création du panier sous forme d'objet
class Cart {
	constructor(
		id,
		image,
		name,
		description,
		color,
		unitPrice,
		totalPrice,
		quantity
	) {
		this.id = id;
		this.image = image;
		this.name = name;
		this.description = description;
		this.color = color;
		this.unitPrice = unitPrice;
		this.totalPrice = totalPrice;
		this.quantity = quantity;
	}
}

// Activation du bouton pour ajouter un articledans le panier
// document.querySelector(".addToCart").addEventListener('click', function() {
//     console.log(`${teddie.imageUrl}`);
//     console.log(Cart);
// });
