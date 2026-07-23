const termsModal = new bootstrap.Modal(
    document.getElementById("termsModal")
);

const termsContent = document.getElementById("terms-content");

let loaded = false;

document.getElementById("open-terms").addEventListener("click", async (e) => {
    e.preventDefault();
    document.getElementById('item-checkbox').checked = true;

    if (!loaded) {
        const response = await fetch("page/home/term-of-service.html");
        termsContent.innerHTML = await response.text();
        loaded = true;
    }

    termsModal.show();
});
