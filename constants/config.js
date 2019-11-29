const firebaseConfig = {
    apiKey: "AIzaSyANU92M9hFovL1InevE0S5xazPAaoYZJ4E",
    authDomain: "chiasekhoahoc.firebaseapp.com",
    databaseURL: "https://chiasekhoahoc.firebaseio.com",
    projectId: "chiasekhoahoc",
    storageBucket: "chiasekhoahoc.appspot.com",
    messagingSenderId: "71566019198",
    appId: "1:71566019198:web:80021cafcd68f12c86e62f",
    measurementId: "G-XPH1NZ002W"
};

firebase.initializeApp(firebaseConfig);
var databaseRef = firebase.database().ref('khoahoc/');
var storage = firebase.storage();
var storageRef = storage.ref();