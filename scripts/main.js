
// this code checks whether the user is logged in or not
if(localStorage.id !== null && typeof(localStorage.id) !== undefined ){
    window.alert("Already logged in")
} else {
    window.alert("Not logged in")
}   

function handleSignIn() {
    // if username and password are valid then
    // localStorage.id = userMailInput; --> burada unique bir id oluşturup da verebiliriz belki
}

function handleLogout() {
    // if username and password are valid then
    // localStorage.id = userMailInput; --> burada unique bir id oluşturup da verebiliriz belki
    localStorage.id = null;
}
