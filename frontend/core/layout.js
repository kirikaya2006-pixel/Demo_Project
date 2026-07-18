const Layout = {
    async load() {
        await loader.require('layout/header.html',"#header");
        await loader.require('layout/navbar.html',"#navbar");
        await loader.require("layout/footer.html", "#footer");
    }
}