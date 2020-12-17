function handleSignIn() {
    let userEmail = document.getElementById("email").value
    let userPassword = document.getElementById("password").value
    firebase_signIn(userEmail, userPassword)

    if(localStorage.userId !== null && localStorage.userType === "company"){
        window.location.replace("enterprise_homepage.html");
    } else if(localStorage.userId !== null && localStorage.userType === "candidate"){
        window.location.replace("user_homepage.html");
    }
}

function handleLogout() {
    // if username and password are valid then
    // localStorage.id = userMailInput; --> burada unique bir id oluşturup da verebiliriz belki
    localStorage.id = null;
    firebase_singOut()
}

function handleSignUp() {

    let userEmail = document.getElementById("emailInput").value
    let userPassword = document.getElementById("passwordInput").value

    let data = {
        userType: "candidate",
        name: "",
        email: userEmail,
        description: "",
        experiences: [],
        skills: [],
        appliedJobs: [],
    };

    firebase_signUp(userEmail, userPassword, data)

}
