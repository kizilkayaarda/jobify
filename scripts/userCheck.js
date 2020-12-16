function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function userCheckUser(){
    if(localStorage.userType !== "candidate"){
        window.location.replace("index.html")
    }
}

userCheckUser();