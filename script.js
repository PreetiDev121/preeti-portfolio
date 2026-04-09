// Mobile menu toggle
document.getElementById("menu-btn").onclick = function () {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

// Scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form validation
function submitForm() {
    alert("Message sent successfully!");
    return false;
}