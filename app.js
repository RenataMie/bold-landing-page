function fetchData () {
	fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
	.then(response => {
		if (!response.ok) {
			throw Error("Error!");
		}
		return response.json();
	})
	.then(data => {
		console.log(data.products);
		const html = data.products
			.map(prod => {
				return `
				<div class="gridProduct">
					<img src="https:${prod.image}" alt="${prod.name}">
					<h4> ${prod.name}</h4>
					<p> ${prod.description}</p>
					<p>De: R$23,99</p>
					<h3>Por: R$19,99</h3>
					<p>ou 2x de R$9,99</p>
					<button>Comprar</button>
				</div>
				`;
			})
			.join("")
		document.querySelector("#products").insertAdjacentHTML("afterbegin",html);
	})
	
	
}

fetchData();