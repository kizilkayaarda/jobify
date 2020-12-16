function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var job_list = [];

async function print_jobs() {

    await sleep(1000);
    //window.alert("HEY HO")
    var job_postings = [];

    firebase.firestore().collection('jobOffers').doc('offersList').get().then( (data) => {
        job_postings = data.data().job_posting_data
        job_list = job_postings;
        //window.alert(job_postings)
        
        

        if( localStorage.userType === "candidate"){
            refreshJobOffers(job_postings, true);
        } else {
            refreshJobOffers(job_postings, false);
        }

    })
}

function refreshJobOffers(job_postings, apply){
    $('.jobs').empty();

    if( job_postings.length === 0){
        $('.jobs').append(
            '<div class="jobpost media container p-3 mb-2 border-top my-3 bg-dark text-white"">'
            + 'No data to display'
            + '</div>'
        );
    }

    for (let item in job_postings) {
        //window.alert(item)
        let title = job_postings[item]["title"];
        let company = job_postings[item]["company"];
        let city = job_postings[item]["city"];
        let definition = job_postings[item]["definition"];
        let website = job_postings[item]["website"];
        let link = job_postings[item]["link"];

        if (website == "Jobify") {
            let buttonText;
            if(apply == true){
                buttonText = "Apply"
            } else {
                buttonText = "Go to website"
            }
            $('.jobs').append(
                '<div class="jobpost media container p-3 mb-2 border-top my-3 bg-dark text-white"">'
                + '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">'
                + '<div class="media-body">'
                + '<h5 class="mt-0">' + title + '</h5>'
                + '<h5 class="mt-0">' + company + '</h5>'
                + '<h5 class="mt-0">' + city + '</h5>'
                + '<h5 class="mt-0">' + website + '</h5>'
                + '<p>' + definition + "</p>"
                + '<a class="btn btn-warning" href="' + link + '" role=button>' + buttonText + '</a>'
                + '</div>'
                + '</div>'
            );
        }
    }

    for (let item in job_postings) {
        let title = job_postings[item]["title"];
        let company = job_postings[item]["company"];
        let city = job_postings[item]["city"];
        let definition = job_postings[item]["definition"];
        let website = job_postings[item]["website"];
        let link = job_postings[item]["link"];

        if (website != "Jobify") {
            let buttonText;
            if(apply == true){
                buttonText = "Apply"
            } else {
                buttonText = "Go to website"
            }
            $('.jobs').append(
                '<div class="jobpost media container p-3 mb-2 border-top my-3"">'
                + '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">'
                + '<div class="media-body">'
                + '<h5 class="mt-0">' + title + '</h5>'
                + '<h5 class="mt-0">' + company + '</h5>'
                + '<h5 class="mt-0">' + city + '</h5>'
                + '<h5 class="mt-0">' + website + '</h5>'
                + '<p>' + definition + "</p>"
                + '<a class="btn btn-primary" href="' + link + '" role="button">' + buttonText + '</a>'
                + '</div>'
                + '</div>'
            );
        }
    }
}

function add_new_job(title, company, city, definition) {
    let keys = Object.keys(job_postings);
    let int_keys = [];

    for (let key in keys) {
        int_keys.push(parseInt(key));
    }

    let id = (Math.max(...int_keys) + 1).toString;

    let new_job = {
        "title": title,
        "company": company,
        "city": city,
        "definition": definition,
        "website": "Jobify",
        "link": ""
    };

    job_postings[id] = new_job;

}
//add_new_job("Bilkent Mezunu Jigolo", "Kardeşler Baklava", "Ankara", "İş tanımını siz biliyosunuz...");

print_jobs();



