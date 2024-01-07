function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navItems = document.querySelector('.nav-items');

    menuToggle.classList.toggle('active');
    navItems.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var contactForm = document.getElementById("contact-form");

    // Add event listener for form submission
    contactForm.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form inputs
        if (validateForm()) {
            // If the form is valid, you can submit it or perform further actions
            // For now, let's just log the form data
            logFormData();
        }
    });

    // Function to validate form inputs
    function validateForm() {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var messageInput = document.getElementById("message");

        // Basic validation example (you can add more complex validation logic)
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            alert("Please fill in all the required fields.");
            return false;
        }

        // You can add more advanced email validation if needed
        // For simplicity, this example just checks for the presence of '@' in the email
        if (!emailInput.value.includes("@")) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true; // Form is valid
    }

    // Function to log form data (replace this with your own form submission logic)
    function logFormData() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Replace this with your own logic, e.g., sending data to a server
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
        alert("Message sent");
        contactForm.reset();
        // You can add AJAX or fetch API to send the form data to your server
    }
});