const User_Data = {
    async get_data() {
        try{
            const response = await fetch(Config.API + "/api/username",{
                method: "GET",
                headers: Auth.headers(),
            });

            const result = await response.json();
        } catch(error) {
            console.log(error);
        }
    }
}

User_Data.get_data();