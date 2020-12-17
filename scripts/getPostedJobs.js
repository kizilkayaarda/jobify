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
                '<button type="button" class="btn btn-success" data-toggle="modal" data-target="#editPosition">Edit</button>' +
                '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#closeApplication">Close</button>' +
                '<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deletePosition">Delete</button>' +
                '</div>'
                )
            }
        }



    })
}

getPostedJobs()