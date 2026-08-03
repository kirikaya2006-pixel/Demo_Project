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
            ],
        },

        "/Ra-Rose": {
            html: "page/Ra-Rose/home.html",
            css: [
                "page/Ra-Rose/css/mystyle.css",
                "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
                "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Poppins:wght@300;400;500&display=swap",
            ],
            js: [
                "page/Ra-Rose/js/script.js",
            ],
            auth: {
                required: true,
            }
        },

        "/Ra-Rose/Product": {
            html: "page/Ra-Rose/product.html",
            css: [
                "page/Ra-Rose/css/mystyle.css",
                "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
                "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Poppins:wght@300;400;500&display=swap",
            ],
            js: [
                "page/Ra-Rose/js/script.js",
            ],
        },

        "/staff": {
            html: "page/staff/index.html"
        },

        "/term-of-service": {
            html: "page/term-of-service/term-of-service.html",
        },

    },

    async start() {

        const path = window.location.pathname;
        const route = this.routes[path];

        if (!route) {
            await loader.require("page/error/404.html", "#app");
            return;
        }

        if (route.auth) {

            const success = await Auth.check();

            if (!success) {
                localStorage.removeItem("token");
                window.location.replace("/");
                return;
            }

        }

        await loader.require(route.html, "#app");

        if (route.css) {
            route.css.forEach((css) => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = loader.url(css);
                document.head.appendChild(link);
            });
        }

        if (route.js) {
            route.js.forEach((js) => {
                const script = document.createElement("script");
                script.src = loader.url(js);
                document.body.appendChild(script);
            });
        }
    }

}