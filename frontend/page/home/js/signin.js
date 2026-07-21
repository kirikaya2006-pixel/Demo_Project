async function signin() {
    const email = document.getElementById('input-email-signup').value;
    const password = document.getElementById('input-password-signup').value;

    const signin_data = {
        email,
        password,
    }

    try{

        const response = await fetch('http://localhost:2549/api/sign_in',{
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
        } else {
            document.getElementById('display-alert-sign_in').className = "alert alert-danger";
            document.getElementById('display-alert-sign_in').textContent = result.message;
        }

    } catch (error) {
        console.log(error);
    }
    


}