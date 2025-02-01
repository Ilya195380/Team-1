const url = "https://my-json-server.typicode.com/Ilya195380/Team-1/products";


const container = document.getElementById("products");

fetch(url)
    .then(response => response.json())
    .then(products => {
        products.forEach(addProduct)
    })
    .catch(error => console.error("Ошибка загрузки данных:", error));


function addProduct(product) {
    const { name, price } = product;

    const item = document.createElement("div");
    item.classList.add("product");
    item.innerHTML = `
        <h2>${name}</h2>
        <p>price: ${price} $.</p>
        <hr>
    `;
    container.appendChild(item);
}
