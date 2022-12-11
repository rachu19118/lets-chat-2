// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPOpq5cjuYxA5LrIw-aQdN_79f1s_T-VE",
    authDomain: "let-s-chat-a022c.firebaseapp.com",
    projectId: "let-s-chat-a022c",
    storageBucket: "let-s-chat-a022c.appspot.com",
    messagingSenderId: "972422595769",
    appId: "1:972422595769:web:789b857988dff83fd84768"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username)
    window.location = "Kwitter_room.html";
}