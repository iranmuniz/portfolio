document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".main_storie");
    
    container.addEventListener("wheel", function (event) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    });
});