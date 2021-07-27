//GET one article

//recuperation de l'Url de la page
let parsedUrl = new URL(window.location.href);
//identification de l'id dans l'Url
let idArticle = parsedUrl.searchParams.get("id");

//identification de l'input de choix our la quantité
let qte = document.querySelector(".quantity");
//console.log(qte);

// Création du panier sous forme d'objet
class Products {
	constructor(id, color, quantity) {
		this.id = id;
		this.color = color;
		this.quantity = quantity;
	}
}
// récupération des données de l'article correspondant à l'id récupéré dan l'URL
fetch(`http://localhost:3000/api/teddies/${idArticle}`)
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
	})
	.then((teddie) => {
		//récupération et formatage du prix de chaque article
		let price = formattingPrice(teddie.price);

		// Ajout des données récupéré dans la page de l'article
		document
			.querySelector(".image")
			.setAttribute("src", `${teddie.imageUrl}`);
		document
			.querySelector(".image")
			.setAttribute("atl", `Photo de l'ourson ${teddie.name}`);
		document.querySelector(".name").textContent = `${teddie.name}`;
		document.querySelector(
			".description"
		).textContent = `${teddie.description}`;
		document.querySelector(".price").textContent = `Prix : ${price}`;

		
		
		// Boucle permettant de récupérer les option de couleurs disponible pour chaque article
		for (const itemColor of teddie.colors) {
			// Ajout des options de couleurs pour chaque article
			document.querySelector(
				".couleur"
			).innerHTML += `<option class="itemColor" value="${itemColor}">${itemColor}</option>`;
		}

		const couleur = document.querySelector(".couleur");
		let checkedColor = couleur.addEventListener("change", () => {
			checkedColor = couleur.value;
		});

		// Envoi des données de l'article et la quantité commandé dans le pannier
		document.querySelector(".addToCart").addEventListener("click", (e) => {
			e.preventDefault();
			const id = idArticle;
			const color = checkedColor;
			const quantity = qte.value;

			if (color == undefined) {
				alert("erreur couleur");
			} else {
				const products = new Products(id, color, quantity);
				document.querySelector('.modal-text').innerText = `${teddie.name} en ${color} a bien été ajouté au panier !`;

				let keys = `${teddie.name}_${color}`;

				try {
					localStorage.setItem(keys, JSON.stringify(products));
				} catch (error) {
					console.log(error);
				}
			}

		});
	})
	.catch(function (err) {
		console.log(err);
	});

	

chooseQuantity();





