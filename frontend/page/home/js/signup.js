async function signup() {
    const username = document.getElementById('input-username-signup').value;
    const email = document.getElementById('input-email-signup').value;
    const password = document.getElementById('input-password-signup').value;
    const term = document.getElementById('item-checkbox').checked;

    if(!term) {
        document.getElementById('display-alert-sign_up').className = "alert alert-danger";
        document.getElementById('display-alert-sign_up').textContent = "Please accept term of service";
        return;
    }

    if(!username || !email || !password) {
        document.getElementById('display-alert-sign_up').className = "alert alert-danger";
        document.getElementById('display-alert-sign_up').textContent = "Please Insert All Field";
        return;
    }

    const signup_data = {
        username,
        email,
        password,
        term,
    }

    try{

        const response = await fetch('http://localhost:2549/api/sign_up',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signup_data),
        });

        const result = await response.json();

        if(result.success) {
            document.getElementById('display-alert-sign_up').className = "alert alert-success";
            document.getElementById('display-alert-sign_up').textContent = result.message;
        } else {
            document.getElementById('display-alert-sign_up').className = "alert alert-danger";
            document.getElementById('display-alert-sign_up').textContent = result.message;
        }

    } catch (error) {
        console.log(error);
    }
    


}