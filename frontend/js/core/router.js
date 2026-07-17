const Router = {
    routes: {
        "/" : "page/home.html",
        "/customer" : "page/customer/index.html",
        "/staff" : "page/staff/index.html",
    },

    start(){
        const path = window.location.pathname;
        const page = this.routes[path];

        if (page) {
            loader.require("layout/head.html");
            loader.require(page);
        } else {
            loader.require("layout/head.html");
            loader.require("page/error.html");
        }
    }
}