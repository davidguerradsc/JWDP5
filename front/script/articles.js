// getting all articles
fetch("http://localhost:3000/api/teddies")
.then((res) => {
	if (res.ok) {
		return res.json();
	}
})
.then((teddies) => {

		const arts = document.querySelector(".teddys");

		for (const article of teddies) {

			arts.innerHTML += `<div class="col"><div class="card" style="width: 18rem;">
              <img src="${article.imageUrl}" class="card-img-top" alt="photo de l'ours ${article.name}">
              <div class="card-body">
                <h5 class="card-title">${article.name}</h5>
                <p class="card-text">${article.price}</p>
                <a href="front/pages/article.html" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>`;
		}
	})
	.catch(function (err) {
		// Une erreur est survenue
	});

	//getting one article
const art = document.querySelector("teddie")
fetch(`http://localhost:3000/api/teddies/${_id}`)
.then((res) => { 
	if (res.ok) { 
		return res.json();
	} 
})
.then((teddie) => {
	for (const article of teddie) {
		art.innerHTML += `<div class="col"><div class="card" style="width: 18rem;">
              <img src="${article.imageUrl}" class="card-img-top" alt="photo de l'ours ${article.name}">
              <div class="card-body">
                <h5 class="card-title">${article.name}</h5>
                <p class="card-text">${article.price}</p>
                <a href="article.html" class="btn btn-primary">Go somewhere2</a>
              </div>
            </div>
            </div>`;
	}
})
.catch(function(err) {
//err
});
