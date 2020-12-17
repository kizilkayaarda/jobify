function apply(jobId){
    let userId = localStorage.userId;

    firebase.firestore().collection('users').doc(userId).get().then( (data) => {
        let userData = data.data();
        let appliedJobs = data.data().appliedJobs;
        //window.alert(job_postings)
        
        appliedJobs.push(jobId);
        
        userData.appliedJobs = appliedJobs;

        firebase.firestore().collection('users').doc(userId).set({
            userData
        }).then({
            //successfull
        })

    })

}