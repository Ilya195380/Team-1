document.addEventListener("DOMContentLoaded", () => {
    fetch("db.json") 
        .then(response => response.json())
        .then(data => {
            const products = data.products; 
            const container = document.getElementById("products");

            products.forEach(product => {
                const item = document.createElement("div");
                item.classList.add("product-card"); 
                item.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>price: ${product.price} $.</p>
                    <hr>
                `;
                container.appendChild(item);
            });
        })
        .catch(error => console.error("Ошибка загрузки данных:", error));
});
