function firebase_signUp( email, password, userData ){
    const auth = firebase.auth();

    window.alert(userData.userType)

    if(typeof(userData) == undefined || userData == null){
        userData = {notDeclerad: true}
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
        window.alert("Sign Up successful")
        firebase.firestore().collection('users').doc('information').get().then( (data) => {
            var num = data.data().numberOfUsers;
            num = num + 1;

            firebase.firestore().collection('users').doc('information').update({
                "numberOfUsers": num
            }).then(() => {
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                    userData
                }).then(function(docRef){
                    window.alert("Hey ");
                    window.location.replace("login.html");
                }).catch(function(error){
                    window.alert("Error adding document: ", error);
                })
            })
        })
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("errorCode: " + errorCode + "\nerrorMessage: " + errorMessage);
    })
}

function firebase_signIn( email, password ){
    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
        window.alert(firebase.auth().currentUser.uid)
        localStorage.userId = firebase.auth().currentUser.uid;

        firebase.firestore().collection('users').doc(localStorage.userId).get().then( (data) => {
            if( data !== null && typeof(data) != undefined){
                localStorage.userType = data.data().userData.userType;
            }
        })

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("errorCode: " + errorCode + "\nerrorMessage: " + errorMessage);
    })
}

function firebase_signOut(){
    firebase.auth().signOut().then(function() {
        window.alert("sign out successful");
        localStorage.userId = null;
        localStorage.userType = "";
        window.location.replace("index.html")
      }).catch(function(error) {
          window.alert("error happened while signing out ", error)
      });
} 

