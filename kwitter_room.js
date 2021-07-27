
//ADD YOUR FIREBASE LINKS HERE
// My web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBUVE1OICIWR_h9ezdKviGoMNXQT79y62A",
      authDomain: "kwitter-1e0c4.firebaseapp.com",
      databaseURL: "https://kwitter-1e0c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e0c4",
      storageBucket: "kwitter-1e0c4.appspot.com",
      messagingSenderId: "571698137549",
      appId: "1:571698137549:web:1f798e468e89ac2f4adc84"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
