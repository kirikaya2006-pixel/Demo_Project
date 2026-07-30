const Auth = {
    headers(){
        return {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getitem('token'),
        };
    }
}