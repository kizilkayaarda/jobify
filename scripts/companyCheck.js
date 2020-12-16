function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function companyCheck(){
    window.alert(localStorage.userId)
    if(localStorage.userId == null){
        window.alert("bura bura")
        window.location.replace("index.html")
    }

    if(localStorage.userId !== null && typeof(localStorage.userId) != undefined){
        if(localStorage.userType === "company"){
            window.location.replace("enterprise_homepage.html")
        }
    } else {
        
        window.location.replace("index.html")
    }
}

companyCheck();