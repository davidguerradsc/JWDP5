// Page panier

let products = [];

class Contact {
	constructor(firstName, lastName, address, city, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.email = email;
	}
}

for (let i = 0; i < localStorage.length; i++) {
	let article = JSON.parse(localStorage.getItem(localStorage.key(i)));
	let articleKey = localStorage.key(i);
	let qte = document.getElementsByClassName(articleKey);

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
			).innerHTML += `<div class="card mb-1 ">
									<div class="row g-0">
										<div class="col-md-3">
											<img src="${teddies.imageUrl}" class="img-fluid rounded-start h-100" alt="..." />
										</div>
										<div class="col-md-9">
											<div class="row g-0">
												<div class="col-md-6 card-body">
													<h5 class="card-title">${teddies.name}</h5>
													<p class="card-text">Couleur :
														${article.color}
													</p>
													<div class="row">
														<div class="col justify-content-center">
															<label>Quantité :
																<button type="button" class="btn-primary btn-sm buttonChangeMinusOne">
																	-
																</button>
																<input type="text" pattern="[0-9]" class="col-2 text-center quantite ${articleKey}" value="${article.quantity}"/>
																<button type="button" class="btn-primary btn-sm h-2 buttonChangePlusOne">
																+
																</button>
															</label>
														</div>
													</div>
												</div>
												<div class="col-md-6 card-body">
													<p class="card-text mb-5">
														<small class="text-muted">Prix unitaire : ${price}</small>
													</p>
													<h5 class="card-title">Prix total : ${totalArticlePrice}</h5>
													<div class="d-grid gap-2 d-md-flex justify-content-md-end">
														<button type="button" class="btn btn-danger btn-sm delete">Supprimer</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>`;

			// console.log(teddies);
			// console.log("localStorage :", article);
			// console.log("localStorage key :", articleKey);
			// console.log("Quantité :", article.quantity);

			// console.log(qte);
			// console.log(qte.defaultvalue);
			// console.log("test", qte.value);
			console.log("key", articleKey);
			let plusOne = document.getElementsByClassName("buttonChangePlusOne");
			let minusOne = document.getElementsByClassName("buttonChangeMinusOne");
			
			// let plusOne = document.querySelector(".buttonChangePlusOne");
			// let minusOne = document.querySelector(".buttonChangeMinusOne");
			

			plusOne.addEventListener("click", function () {
				//quantity.value++;
				console.log("plus 1");
			});

			minusOne.addEventListener("click", function () {
				//
				console.log("moins 1");
			});
			//changeQuantiy(qte);
		})
		.catch(function (err) {
			console.log(err);
		});
}
