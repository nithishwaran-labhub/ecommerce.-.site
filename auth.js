// ---------------- SIGNUP ----------------
function signupUser() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user exists
    if (users.some(u => u.username === username)) {
        alert("User already exists!");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "login.html";
}


// ---------------- LOGIN ----------------
function loginUser() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(u => u.username === username && u.password === password);

    if (!validUser) {
        alert("Invalid username or password!");
        return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", username);

    window.location.href = "index.html";
}


// ---------------- LOGOUT ----------------
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
}

