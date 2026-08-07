async function logout() {
    try{
        const response = await fetch(Config.API + "/api/logout",{
            method: "PUT",
            headers: Auth.headers(),
        });

        const result = await response.json();

        if(result.success) {
            localStorage.removeItem('token');
            window.location.replace('/');
        }
    } catch (error) {
        console.log(error);
    }
}