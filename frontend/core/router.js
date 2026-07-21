const Router = {

    routes: {

        "/": {

            html: "page/home/home.html",
            css: [
                "page/home/css/home.css",
            ],
            js: [
                "page/home/js/home.js"
            ]

        },

        "/customer": {

            html: "page/customer/index.html",

        },

        "/staff": {

            html: "page/staff/index.html"

        }

    },

    async start(){

        const path = window.location.pathname;
        const route = this.routes[path];
        route.css.forEach((css)=>{
            const link = document.createElement("link");

            link.rel = "stylesheet";
            link.href = css;

            document.head.appendChild(link);
        });

        route.js.forEach((js)=>{
            const script = document.createElement("script");

            script.src = js;
            document.body.appendChild(script);
        });

        if(route){
            await loader.require(route.html, "#app");
            console.log(route);
        }else{

            await loader.require("page/error/404.html","#app");

        }

    }

}