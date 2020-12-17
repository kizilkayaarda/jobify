function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function userCheck(){
    if(localStorage.uid !== null || typeof(localStorage.uid) != undefined){
        if(localStorage.userType === "candidate"){
            window.location.replace("user_homepage.html")
        } else if(localStorage.userType === "company"){
            window.location.replace("enterprise_homepage.html")
        }
    }
}

userCheck();