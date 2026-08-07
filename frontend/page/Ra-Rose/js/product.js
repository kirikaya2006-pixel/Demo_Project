const Product = {
    async flower() {
        try{
            const response = await fetch(Config.API + "/api/product",{
                method: "GET",
                headers: Auth.headers(),
            });

            const result = await response.json();

            if(result.success) {

                const product_card = document.getElementById('display-product-card');
                product_card.innerHTML = "";

                result.data.forEach(item => {
                    let html = `
                        <div class="col-lg-4">

                            <article class="flower-card">

                                <a href="">
                                    <div class="flower-img">

                                        <img src="${item.image}" alt="${item.name}">

                                    </div>
                                </a>

                                <div class="flower-info">

                                    <span class="flower-tag">

                                        <span>${item.flower_type}</span>

                                    </span>

                                    <h3>

                                        <span>${item.name}</span>

                                    </h3>

                                    <p>

                                        <span>${item.description}</span>

                                    </p>

                                    <a href="#">

                                        View Collection

                                        <i class="bi bi-arrow-right"></i>

                                    </a>

                                </div>

                            </article>

                        </div>
                    `;

                    product_card.innerHTML += html;
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

Product.flower();