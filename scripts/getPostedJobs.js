function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getPostedJobs(){

    $('.jobs').empty();

    await sleep(1000)

    firebase.firestore().collection('jobOffers').doc("offersList").get().then( (data) => {
        let job_posting_data = data.data().job_posting_data;

        let finalList = []

        let aplicantNumbers = []

        for(let index in job_posting_data){
            if(localStorage.userId === job_posting_data[index].companyId){
                finalList.push(job_posting_data[index])
                aplicantNumbers.push(job_posting_data[index].applicants.length)
            }
        }

        if(finalList.length === 0){
            $('.jobs').append('<div class="media">'+
            '<div class="media-body">' +
            '<h5 class="mt-0">No data to display</h5>' +
            '</div>' +
            '</div>')
        } else {
            for(let i in finalList){
                $('.jobs').append('<div class="media">'+
                '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">' +
                '<div class="media-body">' +
                '<h5 class="mt-0">' + finalList[i].title + '</h5>' +
                '<p> City: ' + finalList[i].city + '</p>'+
                '<p>' + finalList[i].definition + '</p>'+
                '</div>' +
                '</div>')

                $('.jobs').append('<div class="panel">'+
                '<a href="applicants.html" class="btn btn-primary clear">' +
                'Applications <span class="badge badge-light">' + aplicantNumbers[i] + '</span>' +
                '</a>' +
                '<button type="button" class="btn btn-success" data-toggle="modal" data-target="#editPosition" id="' + finalList[i].jobId + '" onClick="loadToEditPost(this.id)">Edit</button>' +
                '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#closeApplication" id="' + finalList[i].jobId + '" onClick="closePost(this.id)">Close</button>' +
                '<button type="button" class="btn btn-danger" data-toggle="modal" id="' + finalList[i].jobId + '" onClick="deletePost(this.id)">Delete</button>' +
                '</div>'
                )
            }
        }
    })
}

function loadToEditPost(jobId){

    localStorage.jobId = jobId;



    firebase.firestore().collection('jobOffers').doc("offersList").get().then( (data) => {
        let job_posting_data = data.data().job_posting_data;

        let index = -1;

        for(let i in job_posting_data){
            if(jobId == job_posting_data[i].jobId){
                index = i;
            }
        }
        document.getElementById("jobTitleInput2").value = job_posting_data[index].title
        document.getElementById("locationInput2").value = job_posting_data[index].city
        document.getElementById("descriptionInput2").value = job_posting_data[index].definition

    })
}

function saveEditPost(){
    firebase.firestore().collection('jobOffers').doc("offersList").get().then( (data) => {
        let job_posting_data = data.data().job_posting_data;

        let index = -1;

        for(let i in job_posting_data){
            if(localStorage.jobId == job_posting_data[i].jobId){
                index = i;
            }
        }

        let jobTitleInput = document.getElementById("jobTitleInput2").value;

        let locationInput = document.getElementById("locationInput2").value;

        let descriptionInput = document.getElementById("descriptionInput2").value;

        let qualInput = document.getElementById("qualInput2").value;

        if(jobTitleInput === ""){
            window.alert("job title cannot be empty")
            return
        }
        if(locationInput === ""){
            window.alert("location cannot be empty")
            return
        }
        if(descriptionInput === ""){
            window.alert("description cannot be empty")
            return
        }

        job_posting_data[index].title = jobTitleInput
        job_posting_data[index].city = locationInput
        job_posting_data[index].definition = descriptionInput

        firebase.firestore().collection('jobOffers').doc("offersList").set({job_posting_data}).then(function(){
            window.location.replace("enterprise_homepage.html")
        })

    })
}

function closePost(jobId){
    deletePost(jobId)
}

function deletePost(jobId){
    firebase.firestore().collection('jobOffers').doc("offersList").get().then( (data) => {
        let job_posting_data = data.data().job_posting_data;

        let index = -1;

        for(let i in job_posting_data){
            if(jobId == job_posting_data[i].jobId){
                index = i;
            }
        }

        let finalList = []

        for(let i in job_posting_data){
            if(jobId != job_posting_data[i].jobId){
                finalList.push(job_posting_data[i])
            }
        }

        job_posting_data = finalList

        firebase.firestore().collection('jobOffers').doc("offersList").set({job_posting_data}).then(function(){
            window.location.replace("enterprise_homepage.html")
        })

    })
}

getPostedJobs()