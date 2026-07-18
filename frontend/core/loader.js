const loader = {

    async require(path, target = "#app") {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error("Cannot Load: " + path);
        }
        const html = await response.text();
        document.querySelector(target).innerHTML = html;
    }

};