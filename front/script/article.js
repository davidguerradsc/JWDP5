//getting one article

//recuperation de l'Url de la page
let parsedUrl = new URL(window.location.href);
//identification de l'id dans l'Url
let idArticle = parsedUrl.searchParams.get("id");

const art = document.querySelector(".article");

fetch(`http://localhost:3000/api/teddies/${idArticle}`)
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
	})
	.then((teddie) => {
		console.log(teddie);
        

		art.innerHTML += `
		<div class="card mb-3">
            <img src="${teddie.imageUrl}" class="card-img-top" alt="photo de l'ours ${
                        teddie.name
                    }">
            <div class="card-body">
                <h5 class="card-title">${teddie.name}</h5>
                <p class="card-text">${teddie.description}</p>
                <div class="col">
                    <select class="form-select col-6 item" aria-label="Default select example">
                        <option selected>Open this select menu</option>
            ${teddie.colors.forEach(item => {
                console.log(item);
            })}

                    </select>
            </div>
                <p class="card-text">${new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR"}).format(teddie.price / 100)}</p>
                <a href="" class="btn btn-primary">Add to cart</a>
            </div>
        </div>`;
	})
	.catch(function (err) {
		//err
	});
