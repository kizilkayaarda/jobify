function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleUserApplications(){
    await sleep(1000);

    $('.jobs').empty();

    let userId = localStorage.userId;

    firebase.firestore().collection('users').doc(userId).get().then( (data) => {
        let appliedJobs = data.data().userData.appliedJobs;
        //window.alert(job_postings)

        if( appliedJobs.length === 0 ){
            $('.jobs').append(
                '<div class="jobpost media container p-3 mb-2 border-top my-3 bg-dark text-white"">'
                + 'No data to display'
                + '</div>'
            );
        } else {
            let resultData = [];

            firebase.firestore().collection('jobOffers').doc("offersList").get().then( (data2) => {
                let job_posting_data = data2.data().job_posting_data;

                for(let i in job_posting_data){
                    for (let index in appliedJobs) {
                        if(job_posting_data[i].jobId === appliedJobs[index] ){
                            console.log("we found one!")
                            console.log("id: ",job_posting_data[i].jobId )
                            resultData.push(job_posting_data[i])
                        }
                    }
                }

            }).then(function(){
                
                var atLeastOneJobify = false;

                for( let index in resultData){
                    let title = resultData[index]["title"];
                    let company = resultData[index]["company"];
                    let city = resultData[index]["city"];
                    let definition = resultData[index]["definition"];
                    let website = resultData[index]["website"];
                    let link = resultData[index]["link"];

                    console.log(title);

                    var buttonText = "Cancel"

                    if(website.toLowerCase() == "jobify"){
                        console.log("hey")
                        atLeastOneJobify = true;
                        var parameter = resultData[index]["jobId"]

                        $('.jobs').append(
                            '<div class="jobpost media container p-3 mb-2 border-top my-3 bg-dark text-white"">'
                            + '<img src="img/jobify-logo.png" class="align-self-start mr-3" alt="...">'
                            + '<div class="media-body">'
                            + '<h5 class="mt-0">' + title + '</h5>'
                            + '<h5 class="mt-0">' + company + '</h5>'
                            + '<h5 class="mt-0">' + city + '</h5>'
                            + '<h5 class="mt-0">' + website + '</h5>'
                            + '<p>' + definition + "</p>"
                            + '<a class="btn btn-warning" role=button id = ' + resultData[index]["jobId"] + ' onClick="cancelApplication( this.id )">' + buttonText + '</a>'
                            + '</div>'
                            + '</div>'
                        );
                    }
                }

                if( !atLeastOneJobify ){
                    $('.jobs').append(
                        '<div class="jobpost media container p-3 mb-2 border-top my-3 bg-dark text-white"">'
                        + 'No data to display'
                        + '</div>'
                    );
                }
            });
        }
    })
}

function cancelApplication(jobId){

    firebase.firestore().collection('users').doc(localStorage.userId).get().then( (data) => {
        let userData = data.data().userData;

        let appliedJobs = userData.appliedJobs;

        let index = appliedJobs.indexOf(jobId)

        let result = []

        if(index !== -1){
            for( let i = 0; i < appliedJobs.length; i++){
                if(i !== index ){
                    result.push(appliedJobs[i])
                }
            }
        }
        appliedJobs = result;

        userData.appliedJobs = appliedJobs;

        firebase.firestore().collection('users').doc(localStorage.userId).set({userData}).then(()=>{
            firebase.firestore().collection('jobOffers').doc("offersList").get().then((data2) => {
                let job_posting_data = data2.data().job_posting_data;

                for(let i = 0 ; i < job_posting_data.length; i++){
                    if(job_posting_data[i].jobId === jobId){
                        let appliedCandidates = job_posting_data[i].appliedCandidates;

                        let finalData = []

                        for(let index2 = 0; index < appliedCandidates.length; index2++){
                            if(appliedCandidates[index2] !== localStorage.userId){
                                finalData.push(appliedCandidates[index2])
                            }
                        }

                        appliedCandidates = finalData;

                        job_posting_data[i].appliedCandidates = appliedCandidates;

                        i = job_posting_data.length; // break condition
                    }
                }

                firebase.firestore().collection('jobOffers').doc("offersList").set({job_posting_data});

            })
            window.location.replace("user_applications.html")
        })


    })
}

handleUserApplications()