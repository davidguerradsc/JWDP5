// getting all articles
fetch("http://localhost:3000/api/teddies")
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
	})
	.then((teddies) => {
		for (const article of teddies) {
			document.querySelector(".teddys").innerHTML += 
			`<div class="col">
				<div class="card h-100">
					<img src="${article.imageUrl}" class="card-img-top h-75" alt="photo de l'ours ${article.name}">
					<div class="card-body">
						<h5 class="card-title">${article.name}</h5>
						<p class="card-text">${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(article.price/100)}</p>
						<a href="front/pages/article.html?id=${article._id}" class="btn btn-primary">Go somewhere</a>
					</div>
            	</div>
            </div>`;
		}
	})
	.catch(function (err) {
		// Une erreur est survenue
	});
