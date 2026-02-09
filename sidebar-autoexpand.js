document.addEventListener("DOMContentLoaded", function () {
    const active = document.querySelector(".sidebar-item a.active");

    if (active) {
        let parent = active.closest("details");
        while (parent) {
            parent.open = true;
            parent = parent.parentElement.closest("details");
        }
    }
});