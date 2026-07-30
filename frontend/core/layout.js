const Layout = {

    layouts: {
        "/": {
            navbar: "layout/none.html",
        },
        "/Ra-Rose": {
            navbar: "layout/rarose_nav.html",
        },
        "/Ra-Rose/Product": {
            navbar: "layout/rarose_product_nav.html",
        },
    },

    async load() {
        const path = window.location.pathname;
        const layout = this.layouts[path];

        if(layout) {
            await loader.require(layout.navbar, "#header");
            if(layout.css) {
                layout.css.forEach((css) => {
                    const link = document.createElement("link");

                    link.rel = "stylesheet";
                    link.href = Config.ROOT + css;

                    document.head.appendChild(link);
                });
            }
        } else {
            await loader.require("", "#header");
        }
    }
}