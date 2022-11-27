
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
//akcja wcisniecia guzika
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
// sprawdzanie poprawnosci danych logowania i pop up o poprawności lub nie
    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("something went wrong");
    }
})
