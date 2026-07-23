const Router = {

    routes: {

        "/": {
            html: "page/home/home.html",
            css: [
                "page/home/css/home.css",
            ],
            js: [
                "page/home/js/home.js",
                "page/home/js/signup.js",
                "page/home/js/signin.js",
                "page/home/js/modal.js",
            ]
        },

        "/customer": {
            html: "page/customer/index.html",
        },

        "/staff": {
            html: "page/staff/index.html"
        },

        "/term-of-service": {
            html: "page/term-of-service/term-of-service.html",
        },

    },

    async start(){

        const path = window.location.pathname;
        const route = this.routes[path];

        if(route){
            await loader.require(route.html, "#app");
            if(route.css) {
                route.css.forEach((css)=>{
                    const link = document.createElement("link");

                    link.rel = "stylesheet";
                    link.href = css;

                    document.head.appendChild(link);
                });
            };
            
            if(route.js) {
                route.js.forEach((js)=>{
                    const script = document.createElement("script");

                    script.src = js;
                    document.body.appendChild(script);
                });
            }
            console.log(route);
        }else{
            await loader.require("page/error/404.html","#app");
        }

    }

}