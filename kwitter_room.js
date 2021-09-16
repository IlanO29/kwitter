
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAOmIZaHX7Y5-KQ1zO637gl2hJhR_voKL8",
      authDomain: "classtest-a9b8c.firebaseapp.com",
      projectId: "classtest-a9b8c",
      storageBucket: "classtest-a9b8c.appspot.com",
      messagingSenderId: "142369870036",
      appId: "1:142369870036:web:f08d20b54420f5bf00ab41",
      measurementId: "G-8Y30PG9HMQ"
    };
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room name", room_name);
  
      window.location = "kwitter_page.html";
  }
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Roon_names);
      row = "<div class='room_name'  id="+Roon_names+" onclick='redrictToRoomName(this.id)' >#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();

function redrictToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}