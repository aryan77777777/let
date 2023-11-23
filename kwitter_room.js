user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCR1pLwD3Frc-yTeof-WcEgpZED_gIWRaM",
      authDomain: "kwitter-5d052.firebaseapp.com",
      databaseURL: "https://kwitter-5d052-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d052",
      storageBucket: "kwitter-5d052.appspot.com",
      messagingSenderId: "706419129999",
      appId: "1:706419129999:web:0843b7f8736d0cbf57fafa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location ="kwitter_page.html";
}
    
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData();

function redirectToRoomName(name)
{console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}