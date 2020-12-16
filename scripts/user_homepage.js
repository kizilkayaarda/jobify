function make_search(){
    let keyword_location = document.getElementById("location").value.toLowerCase();
    let keyword_title_skill_company = document.getElementById("titleSkillCompany").value.toLowerCase();

    if(keyword_title_skill_company === ""){
        make_search_for_location()
    }
    else if(keyword_location === ""){
        make_search_title_skill_company()
    } else {
        // do both
    }
}


function make_search_for_location(){
    let keyword = document.getElementById("location").value.toLowerCase();

    window.alert(keyword)

    var finalList = [];

    for (let id in job_list) {
        window.alert("city: " + job_list[id]["city"].toLowerCase() + " keyword: " + keyword)
        if(job_list[id]["city"].toLowerCase().indexOf(keyword) !== -1){
            window.alert("aldı");
            finalList.push(job_list[id]);
        }
    }

    refreshJobOffers(finalList, true);
}

function make_search_title_skill_company(){
    let keyword_title_skill_company = document.getElementById("titleSkillCompany").value.toLowerCase();

    var finalList = [];

    for (let id in job_list) {
        if(job_list[id]["title"].toLowerCase().indexOf(keyword_title_skill_company) !== -1){
            finalList.push(job_list[id]);
        }
    }

    refreshJobOffers(finalList, true);

}