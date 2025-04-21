// Back to Top Button functionality
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Contact form validation (optional, you can add this logic to validate form inputs)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (!name || !email || !message) {
        alert("All fields are required.");
        event.preventDefault(); // Prevent form submission
    }
});
