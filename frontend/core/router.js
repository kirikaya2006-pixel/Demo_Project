const Router = {

    routes: {

        "/": {

            html: "page/home/home.html",

            css: [
                "page/home/home.css"
            ],

            js: [
                "page/home/home.js"
            ]

        },

        "/customer": {

            html: "page/customer/index.html"

        },

        "/staff": {

            html: "page/staff/index.html"

        }

    },

    async start(){

        const path = window.location.pathname;

        const route = this.routes[path];

        if(route){

            await loader.require(route.html, "#app");

            console.log(route);

        }else{

            await loader.require("page/error/404.html","#app");

        }

    }

}