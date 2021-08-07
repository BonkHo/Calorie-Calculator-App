import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyALtXiBtvO2hknskLOhIU-Tj9sWKeo9Ziw",
    authDomain: "calorie-calculator-app-4778c.firebaseapp.com",
    projectId: "calorie-calculator-app-4778c",
    storageBucket: "calorie-calculator-app-4778c.appspot.com",
    messagingSenderId: "707010966929",
    appId: "1:707010966929:web:decc1fbdaaf1b2f9679630",
    measurementId: "G-CBVLHQH3KB",
};

firebase.initializeApp(firebaseConfig);

/* {
"root": {
    "userData": {
        "1": {
            gender,
            activity,
        }
        "2": {
            gender,
            activity,
        }
    }
}
        "user": {
            "1": {
                "username": "byte_of_code",
                "phrase": "Lets Go"
            }
        }
    //... other users
    }
} */

// sets a key
firebase.database().ref("user/1").set({
    username: "byte_of_code",
    phrase: "Lets Go",
});

// get a key
firebase
    .database()
    .ref("user")
    .get()
    .then((resp) => {
        return resp.val();
    })
    .then(console.log);

export default firebase;
