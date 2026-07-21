const loader = {

    async require(path, target = "#app") {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error("Cannot Load: " + path);
        }
        const html = await response.text();
        const element = document.querySelector(target);

        if (!element) {
            throw new Error(`Target '${target}' not found.`);
        }

        element.innerHTML = html;
    }

};