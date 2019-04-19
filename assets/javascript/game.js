
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

var clickCounter = 0;


// On Click
$("#click-button").on("click", function () {

    clickCounter++;

    database.ref().set({
        clickCount: clickCounter
    });
})