firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      localStorage.userId = user.uid;
    } else {
      // User not logged in or has just logged out.
      localStorage.userId = null;
    }
});

function firebase_signUp( email, password, userType, userData ){
    const auth = firebase.auth();

    if(typeof(userData) == undefined && userData == null){
        userData = {notDeclerad: true}
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
        window.alert("Sign Up successful")

        // firebase store operations
        if(userType == "company"){
            
            firebase.firestore().collection('companies').doc('information').get().then( (data) => {
                window.alert(data.data().numberOfCompanies)
                var num = data.data().numberOfCompanies;
                num = num + 1;

                firebase.firestore().collection('companies').doc('information').update({
                    "numberOfCompanies": num
                }).then(() => {
                    firebase.firestore().collection('companies').doc(user.uid).set({
                        userData
                    }).then(function(docRef){
                        window.alert("Document written with ID: ", docRef.id);
                    }).catch(function(error){
                        window.alert("Error adding document: ", error);
                    })
                })
            })
        } else {
            firebase.firestore().collection('candidates').doc('information').get().then( (data) => {
                window.alert(data.data().numberOfCompanies)
                var num = data.data().numberOfCompanies;
                num = num + 1;

                firebase.firestore().collection('candidates').doc('information').update({
                    "numberOfCandidates": num
                }).then(() => {
                    firebase.firestore().collection('candidates').doc(user.uid).set({
                        userData
                    }).then(function(docRef){
                        window.alert("Document written with ID: ", docRef.id);
                    }).catch(function(error){
                        window.alert("Error adding document: ", error);
                    })
                })
            })
        }
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("errorCode: " + errorCode + "\nerrorMessage: " + errorMessage);
    })
}

function firebase_signIn( email, password ){
    const auth = firebase.auth();

    auth.signInWithEmailAndPassword("ensmrdane@gmail.com", "123456")
    .then((user) => {
        // signed in
        // direct to the page
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("errorCode: " + errorCode + "\nerrorMessage: " + errorMessage);
    })
}



