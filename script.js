
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mobileSidebar = document.getElementById("mobileSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    // Safety check (prevents errors)
    if (!menuToggle || !mobileSidebar || !closeSidebar) {
        console.error("Mobile menu elements not found");
        return;
    }

    // Open sidebar
    menuToggle.addEventListener("click", function () {
        mobileSidebar.classList.add("active");
    });

    // Close sidebar
    closeSidebar.addEventListener("click", function () {
        mobileSidebar.classList.remove("active");
    });

});
