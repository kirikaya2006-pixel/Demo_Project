async function signin() {
    const email = document.getElementById('input-email-signin').value;
    const password = document.getElementById('input-password-signin').value;

    if(!email || !password) {
        document.getElementById('display-alert-sign_in').className = "alert alert-danger";
        document.getElementById('display-alert-sign_in').textContent = "Please insert all field";
        return;
    }

    const signin_data = {
        email,
        password,
    }

    try{

        const response = await fetch(Config.API + '/api/sign_in',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signin_data),
        });

        const result = await response.json();

        if(result.success) {
            document.getElementById('display-alert-sign_in').className = "alert alert-success";
            document.getElementById('display-alert-sign_in').textContent = result.message;
            
            localStorage.setItem('token',result.data.token);
            localStorage.setItem('username',result.data.username);
            localStorage.setItem('email',result.data.email);
            localStorage.setItem('role',result.data.role);

            window.location.href = 'Ra-Rose';
        } else {
            document.getElementById('display-alert-sign_in').className = "alert alert-danger";
            document.getElementById('display-alert-sign_in').textContent = result.message;
        }

    } catch (error) {
        console.log(error);
    }

}