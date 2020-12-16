function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function userCheckUser(){
    if(localStorage.uid !== null || typeof(localStorage.uid) != undefined){
        if(localStorage.userType === "candidate"){
            window.location.replace("user_homepage.html")
        }
    } else {
        window.location.replace("index.html")
    }
}

userCheckUser();