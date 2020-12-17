function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function userCheckUser(){
    if(localStorage.userType !== "company"){
        if(localStorage.userType !== "candidate"){
            window.location.replace("index.html")
        } else {
            window.location.replace("user_homepage.html")
        }
    }
}

userCheckUser();