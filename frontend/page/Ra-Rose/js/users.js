const User_Data = {
    async get_data() {
        try{
            const response = await fetch(Config.API + "/api/user",{
                method: "GET",
                headers: Auth.headers(),
            });

            const result = await response.json();

            if(result.success) {
                document.getElementById('rarose_nav-username').textContent = result.data;
            }
        } catch(error) {
            console.log(error);
        }
    }
}

User_Data.get_data();