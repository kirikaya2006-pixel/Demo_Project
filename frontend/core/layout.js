const Layout = {

    layouts: {
        "/": {

        },

        "/Ra-Rose": {
            navbar: "layout/navbar/rarose_nav.html",
        },

        "/Ra-Rose/Product": {
            navbar: "layout/navbar/rarose_nav.html",
        },

    },

    async load() {
        const path = window.location.pathname;
        const layout = this.layouts[path];

        if(layout) {
            if(layout.navbar) {
                await loader.require(layout.navbar, "#header");
            }
            if(layout.footer) {
                await loader.require(layout.footer, "#footer");
            }
        } else {
            await loader.require("", "#header");
        }
    }
}