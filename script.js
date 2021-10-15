function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// navbar

window.addEventListener("scroll", function() {

    // nav
    let navArea = document.getElementById("blogrNav");

    if (window.pageYOffset > window.innerHeight) {
        navArea.classList.add("primary-bg-color");
    } else {
        navArea.classList.remove("primary-bg-color");
    }
});