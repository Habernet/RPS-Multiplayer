
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjYuZBOCcIR6UUJavmOvMJSkA8IhT2IDE",
    authDomain: "rps-multiplayer-71fa9.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-71fa9.firebaseio.com",
    projectId: "rps-multiplayer-71fa9",
    storageBucket: "rps-multiplayer-71fa9.appspot.com",
    messagingSenderId: "804923586958"
};
firebase.initializeApp(config);

var database = firebase.database();
console.log(database);

// Where I am storing all chat messages.
var chatbase = firebase.database().ref("/chat");






function createAccount() {
    var displayName = $("#name-input").val().trim(); // Grab this from the field on screen
    var email = $("#email-input").val().trim(); // ""
    var password = $("#password-input").val().trim(); // ""
}

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(function (user) {
        // add the displayName (already contains email and password)
        user.updateProfile({ displayName: displayName.value })
    })

// firebase.auth().createUserwithGoogle

// function for sending chat messages
function sendChatMessage() {
    messageToSend = $("#message-input").val().trim();

    chatbase.push().set({
        name: firebase.auth().currentUser.displayName,
        message: messageToSend.value
    })
}

// When chat is updated...send me a snapshot so I can update the page
chatbase.on("child_added", function(snapshot) {
    var messageReceived = snapshot.val();
    addChatMessage(messageReceived.name, messageReceived.message);
})


// function for displaying message on HTML
function addChatMessage() {
    // display this on the page with .text and jquery.
}