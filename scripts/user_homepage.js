function make_search(){
    let keyword_location = document.getElementById("location").value.toLowerCase();
    let keyword_title_skill_company = document.getElementById("titleSkillCompany").value.toLowerCase();

    if(keyword_title_skill_company === ""){
        make_search_for_location()
    }
    else if(keyword_location === ""){
        make_search_title_skill_company()
    } else {
        make_search_for_both()
    }
}


function make_search_for_location(){
    let keyword = document.getElementById("location").value.toLowerCase();

    var finalList = [];

    for (let id in job_list) {
        if(job_list[id]["city"].toLowerCase().indexOf(keyword) !== -1){
            finalList.push(job_list[id]);
        }
    }

    if( localStorage.userType === "candidate"){
        refreshJobOffers(finalList, true);
    } else {
        refreshJobOffers(finalList, false);
    }

    
}

function make_search_title_skill_company(){
    let keyword_title_skill_company = document.getElementById("titleSkillCompany").value.toLowerCase();

    var finalList = [];

    for (let id in job_list) {
        if(job_list[id]["title"].toLowerCase().indexOf(keyword_title_skill_company) !== -1){
            finalList.push(job_list[id]);
        }
    }

    if( localStorage.userType === "candidate"){
        refreshJobOffers(finalList, true);
    } else {
        refreshJobOffers(finalList, false);
    }
}

function make_search_for_both(){
    let keyword_title_skill_company = document.getElementById("titleSkillCompany").value.toLowerCase();
    let keyword = document.getElementById("location").value.toLowerCase();

    var finalList = [];

    for (let id in job_list) {
        if(job_list[id]["title"].toLowerCase().indexOf(keyword_title_skill_company) !== -1){
            finalList.push(job_list[id]);
        }
    }

    var realFinalList = [];

    for (let id in finalList) {
        if(finalList[id]["city"].toLowerCase().indexOf(location) !== -1){
            realFinalList.push(job_list[id]);
        }
    }

    if( localStorage.userType === "candidate"){
        refreshJobOffers(realFinalList, true);
    } else {
        refreshJobOffers(realFinalList, false);
    }

}