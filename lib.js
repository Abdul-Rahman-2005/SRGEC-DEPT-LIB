document.addEventListener("DOMContentLoaded", function () {
    let studentLoginForm = document.querySelector("#div2 form");
    let librarianLoginForm = document.querySelector("#div1 form");

    if (studentLoginForm) {
        studentLoginForm.addEventListener("submit", function (event) {
            validateLogin(event, "student");
        });
    }

    if (librarianLoginForm) {
        librarianLoginForm.addEventListener("submit", function (event) {
            validateLogin(event, "librarian");
        });
    }
});

function validateLogin(event, userType) {
    event.preventDefault(); // Prevent form submission

    // Sample credentials (replace with real validation)
    let validUserId = "23481A12K9";
    let validPassword = "Rahman@2005";

    let userIdInput = event.target.querySelector("input[type='text']");
    let passwordInput = event.target.querySelector("input[type='password']");

    let userId = userIdInput ? userIdInput.value : "";
    let password = passwordInput ? passwordInput.value : "";

    if (userId === validUserId && password === validPassword) {
        alert("Login Successful! Redirecting...");
        window.location.href = userType === "student" ? "student.html" : "faculty.html";
    } else {
        alert("Invalid User ID or Password!");
    }
}

