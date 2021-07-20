//getting one article

//recuperation de l'Url de la page
let parsedUrl = new URL(window.location.href);
//identification de l'id dans l'Url
let idArticle = parsedUrl.searchParams.get("id");


fetch(`http://localhost:3000/api/teddies/${idArticle}`)
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
	})
	.then((teddie) => {

        document.querySelector(".image").setAttribute("src", `${teddie.imageUrl}`);
        document.querySelector(".image").setAttribute("atl", `Photo de l'ourson ${teddie.name}`);
        document.querySelector(".name").textContent = `${teddie.name}`;
        document.querySelector(".description").textContent = `${teddie.description}`;
        document.querySelector(".price").textContent = `Prix : ${new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
        }).format(teddie.price / 100)}`;

		for (const item of teddie.colors) {
			document.querySelector(
				".couleur"
			).innerHTML += `<option value="${item}">${item}</option>`;
		}
	})
	.catch(function (err) {
		//err
	});
