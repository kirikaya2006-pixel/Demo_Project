const Product = {
    async flower() {
        try{
            const response = await fetch(Config.API + "/api/product",{
                method: "GET",
                headers: Auth.headers(),
            });

            const result = await response.json();

            if(result.success) {
                const flower_name = result.data.flower_name;
                const flower_type = result.data.flower_type;
                const flower_image = result.data.flower_image;
                const flower_description = result.data.flower_description;

                document.getElementById('display')
            }
        } catch (error) {
            console.log(error);
        }
    }
}

Product.flower();