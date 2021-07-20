//GET one article

//recuperation de l'Url de la page
let parsedUrl = new URL(window.location.href);
//identification de l'id dans l'Url
let idArticle = parsedUrl.searchParams.get("id");

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

			console.log(`${itemColor}`);

			//return testColor;
		}

		let testColor = document.querySelector(".itemColor");
		console.log(testColor);

		// Envoi des données de l'article et la quantité commandé dans le pannier
		document.querySelector(".addToCart").addEventListener("click", (e) => {
			e.preventDefault();
			const id = idArticle;
			const image = `${teddie.imageUrl}`;
			const name = `${teddie.name}`;
			const description = `${teddie.description}`;
			const color = `${itemColor}`;
			const quantity = qte.value;
			const unitPrice = price;
			const totalPrice = formattingPrice(
				pricePerQuantity(`${teddie.price}`, `${qte.value}`)
			);

			console.log(idArticle);
			console.log(image);
			console.log(name);
			console.log(description);
			console.log(color);
			console.log(quantity);
			console.log(price);
			console.log(totalPrice);

			const cart = new Cart(id, image, name, description, color, unitPrice, totalPrice, quantity);
			console.log(cart);
		});
	})
	.catch(function (err) {
		//err
	});

let testColor = document.querySelector(".itemColor");
console.log(`${testColor.value}`);

let qte = document.querySelector(".quantity");
let plusOne = document.querySelector(".buttonPlusOne");
let minusOne = document.querySelector(".buttonMinusOne");

//console.log(quantity.value);

plusOne.addEventListener("click", function () {
	qte.value++;
	// console.log(quantity.value);
});

minusOne.addEventListener("click", function () {
	qte.value--;
	if (qte.value < 1) {
		qte.value = 1;
	}
	// console.log(quantity.value);
});
