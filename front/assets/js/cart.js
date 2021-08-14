// Page panier
let products = [];
//console.log(products);

for (let i = 0; i < localStorage.length; i++) {
	let article = JSON.parse(localStorage.getItem(localStorage.key(i)));

	let articleKey = localStorage.key(i).replaceAll(" ", "-");

	products.push(article);
	console.log(products);

	fetch(`http://localhost:3000/api/teddies/${article.id}`)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((teddies) => {
			let price = formattingPrice(teddies.price);

			let totalArticlePrice = formattingPrice(
				pricePerQuantity(teddies.price, article.quantity)
			);

			document.querySelector(
				".teddys"
			).innerHTML += `<div class="card col-lg-9 mb-1 delete">
									<div class="row g-0">
										<div class="col-md-3">
											<img src="${teddies.imageUrl}" class="img-fluid rounded-start h-100" alt="..." />
										</div>
										<div class="col-md-9">
											<div class="row g-0">
												<div class="col-md-6 card-body">
													<h5 class="card-title text-center mt-3 mb-4">${teddies.name}</h5>
													<p class="card-text ms-3 mb-3">Couleur :
														${article.color}
													</p>
													<p class="card-text ms-3">Quantité :
														${article.quantity}
													</p>
												</div>
												<div class="col-md-6 card-body">
													<p class="card-text mt-3 mb-4">
														<small class="text-muted">Prix unitaire : ${price}</small>
													</p>
													<h5 class="card-title mb-3">Prix total : ${totalArticlePrice}</h5>
													<div class="d-grid gap-2 d-md-flex justify-content-md-end ">
														<button type="button" class="btn btn-danger btn-sm suppression ${articleKey}">Supprimer</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>`;

			deleteItem();
		})
		.catch(function (err) {
			console.log(err);
		});
}

class Contact {
	constructor(firstName, lastName, address, city, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.email = email;
	}
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll(".needs-validation");
	
	

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener( "submit", function (event) {
				

				if ( !form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
