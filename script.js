// 🌟 SEARCH FUNCTIONALITY
document.getElementById("search-box").addEventListener("keyup", function () {
    let filter = this.value.toUpperCase();
    let apps = document.querySelectorAll(".app");

    apps.forEach(app => {
        let appName = app.querySelector("h2").textContent.toUpperCase();
        if (appName.indexOf(filter) > -1) {
            app.style.display = "";
        } else {
            app.style.display = "none";
        }
    });
});

// 🌟 DARK MODE TOGGLE FUNCTION
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 🌟 HOVER EFFECT ANIMATION
document.querySelectorAll(".app").forEach(app => {
    app.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
    });

    app.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
