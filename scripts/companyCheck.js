function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function companyCheck(){
    
    if(localStorage.userType !== "candidate"){
        window.alert("bura bura")
        window.location.replace("index.html")
    }
}

companyCheck();