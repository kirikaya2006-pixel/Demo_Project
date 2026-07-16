function sign_up() {
    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-password').value;
    const email = document.getElementById('input-email').value;

    const sign_up_data = {
        username: username,
        password: password,
        email: email,
    }

    fetch('http://localhost:3030/api/login',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(sign_up_data),
    })
    .then(response => response.json())
    .then(result => {
        if(result.success) {
            
        } else {

        }
    })
}