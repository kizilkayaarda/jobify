

for (let id in job_postings) {
    let title = job_postings[id]["title"];
    let company = job_postings[id]["company"];
    let city = job_postings[id]["city"];
    let definition = job_postings[id]["definition"];
    let website = job_postings[id]["website"];
    let link = job_postings[id]["link"];

    $('.jobs').append(
    '<div class="jobpost media container p-3 mb-2 border-top my-3" style="hover{background:#53a7ea;}">'
    + '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">' 
    + '<div class="media-body">' 
    + '<h5 class="mt-0">' + title + '</h5>'
    + '<h5 class="mt-0">' + company + '</h5>'
    + '<h5 class="mt-0">' + city + '</h5>'
    + '<h5 class="mt-0">' + website + '</h5>'
    + '<p>' + definition + "</p>"
    + '<a class="btn btn-primary" href="'+link+'" role="button">Go to the Website</a>'
    + '</div>'
    + '</div>'
    );

    console.log(id + ' ' + title + ' ' + company + " " + city + " " + definition + " " + website + " " + link);
}