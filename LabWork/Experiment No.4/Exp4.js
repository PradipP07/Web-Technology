document.getElementById("myForm").addEventListener("submit", function(event) {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    // Name validation
    if (name === "") {
        alert("Name is required");
        return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Form submitted successfully!");
});