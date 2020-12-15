
// this code checks whether the user is logged in or not
if(localStorage.id !== null && typeof(localStorage.id) !== undefined ){
    let test_text = document.getElementById("test log out");
    
    test_text.innerHTML = "logged in already " + localStorage.id;
} else {
    let test_text = document.getElementById("test log out");
    
    test_text.innerHTML = localStorage.id;
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
