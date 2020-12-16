function handleSignIn() {
    let userEmail = document.getElementById("exampleInputEmail1").value
    window.alert(userEmail)
    let userPassword = document.getElementById("exampleInputPassword1").value
    window.alert(userPassword)
    firebase_signIn(userEmail, userPassword)

    window.alert(localStorage.userId)

    if(localStorage.userId && localStorage.userType === "company"){
        window.location.replace("enterprise_homepage.html");
    } else if(localStorage.userId && localStorage.userType === "candidate"){
        window.location.replace("enterprise_homepage.html");
    }
}

function handleLogout() {
    // if username and password are valid then
    // localStorage.id = userMailInput; --> burada unique bir id oluşturup da verebiliriz belki
    localStorage.id = null;
    firebase_singOut()
}

function handleSignUp() {
    let data = {userType: "candidate"};
    
    let userEmail = document.getElementById("exampleInputEmail1").value
    let userPassword = document.getElementById("exampleInputPassword1").value

    firebase_signUp(userEmail, userPassword, data)

}
