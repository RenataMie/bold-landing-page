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
				<div>
					<img src="https:${prod.image}" alt="${prod.name}">
					<h4> ${prod.name}</h4>
					<p class="descricao"> ${prod.description}</p>
					<p>De: R$ ${prod.oldPrice}</p>
					<h3>Por: R$ ${prod.price}</h3>
					<span class="parcel">ou ${prod.installments.count}x de R$ ${prod.installments.value}</span>
					<button>Comprar</button>
				</div>
				`;
			})
			.join("")
		document.querySelector("#products").insertAdjacentHTML("afterbegin",html);

	})
	
}

fetchData();


function fetchData2 () {
	fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2")
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
					<p>De: R$ ${prod.oldPrice}</p>
					<h3>Por: R$ ${prod.price}</h3>
					<p>ou ${prod.installments.count}x de R$ ${prod.installments.value}</p>
					<button>Comprar</button>
				</div>
				`;
			})
			.join("")
		document.querySelector("#products").insertAdjacentHTML("beforeend",html);
	})
	
}

document.getElementById("Btn").addEventListener("click", fetchData2); 

document.getElementById("Email").addEventListener("input", function (event) {
  if (document.getElementById("Email").validity.typeMismatch) {
    document.getElementById("Email").setCustomValidity("Email inválido!");
    document.getElementById("Email").style.borderColor = "red";


  } else {
   document.getElementById("Email").setCustomValidity("");
  }
});




  window.onresize = function() {
  if (window.innerWidth > 600 && window.innerWidth < 900) {
    document.getElementById("change1").innerHTML = 'Olá, Fulano';
    document.getElementById("change2").innerHTML = 'Fizemos uma lista especial de produtos apenas para você. Isso mesmo: nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha só';
    document.getElementById("Btn").innerHTML= 'Tem muito mais aqui. Vem ver!';
  } 
}

