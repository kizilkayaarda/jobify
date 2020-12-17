function addPosition(){
    let jobTitleInput = document.getElementById("jobTitleInput").value;
    let locationInput = document.getElementById("locationInput").value;
    let descriptionInput = document.getElementById("descriptionInput").value;
    let qualInput = document.getElementById("qualInput").value;

    if(jobTitleInput === ""){
        window.alert("Title should be filled")
        return;
    }

    if(locationInput === ""){
        window.alert("Location should be filled")
        return;
    }

    if(descriptionInput === ""){
        window.alert("Description should be filled")
        return;
    }

    if(qualInput === ""){
        window.alert("Qualifications should be filled")
        return;
    }

    firebase.firestore().collection('users').doc(localStorage.userId).get().then( (data) => {

        let dt = new Date();
        let uniqueId = dt.getTime()

        let job_post_data = {
            city: locationInput,
            company: data.data().userData.name,
            companyId: localStorage.userId,
            definition: descriptionInput + "\nSkills: " + qualInput,
            jobId: uniqueId,
            link: "",
            title: jobTitleInput,
            website: "jobify",
            applicants: []
        }

        window.alert(JSON.stringify(job_posting_data))

        firebase.firestore().collection('users').doc(localStorage.userId).get().then( (data2) => {
            let userData = data.data().userData
            let jobOffers = userData.jobOffers

            jobOffers.push(job_post_data.jobId);
            userData.jobOffers = jobOffers;
            
            window.alert(JSON.stringify(jobOffers))

            firebase.firestore().collection('users').doc(localStorage.userId).set({userData}).then(function(){
                firebase.firestore().collection('jobOffers').doc("offersList").get().then( (data3) => {
                    let job_posting_data = data3.data().job_posting_data;
                    job_posting_data.push(job_post_data);
                    
                    firebase.firestore().collection('jobOffers').doc("offersList").set({job_posting_data}).then(function(){
                        // sanrm bir şey kalmadı
                        window.location.replace("enterprise_homepage.html")
                    })

                })
            })

        })

        

    })
}