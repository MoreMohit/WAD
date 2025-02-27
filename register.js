document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Save to local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Simulate AJAX request (fake API)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert("User registered successfully!");
        window.location.href = "users.html"; // Redirect to users list
    })
    .catch(error => console.error("Error:", error));
});
