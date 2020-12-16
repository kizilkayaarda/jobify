

function print_jobs() {
    for (let id in job_postings) {
        let title = job_postings[id]["title"];
        let company = job_postings[id]["company"];
        let city = job_postings[id]["city"];
        let definition = job_postings[id]["definition"];
        let website = job_postings[id]["website"];
        let link = job_postings[id]["link"];

        if (website == "Jobify") {
            $('.jobs').append(
                '<div class="jobpost media container p-3 mb-2 border-top my-3 bg-dark text-white"">'
                + '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">'
                + '<div class="media-body">'
                + '<h5 class="mt-0">' + title + '</h5>'
                + '<h5 class="mt-0">' + company + '</h5>'
                + '<h5 class="mt-0">' + city + '</h5>'
                + '<h5 class="mt-0">' + website + '</h5>'
                + '<p>' + definition + "</p>"
                + '<a class="btn btn-warning" href="' + link + '" role="button">Apply</a>'
                + '</div>'
                + '</div>'
            );
        }
    }

    for (let id in job_postings) {
        let title = job_postings[id]["title"];
        let company = job_postings[id]["company"];
        let city = job_postings[id]["city"];
        let definition = job_postings[id]["definition"];
        let website = job_postings[id]["website"];
        let link = job_postings[id]["link"];

        if (website != "Jobify") {
            $('.jobs').append(
                '<div class="jobpost media container p-3 mb-2 border-top my-3"">'
                + '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">'
                + '<div class="media-body">'
                + '<h5 class="mt-0">' + title + '</h5>'
                + '<h5 class="mt-0">' + company + '</h5>'
                + '<h5 class="mt-0">' + city + '</h5>'
                + '<h5 class="mt-0">' + website + '</h5>'
                + '<p>' + definition + "</p>"
                + '<a class="btn btn-primary" href="' + link + '" role="button">Go to the Website</a>'
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

add_new_job("Bilkent Mezunu Jigolo", "Kardeşler Baklava", "Ankara", "İş tanımını siz biliyosunuz...");
print_jobs();

