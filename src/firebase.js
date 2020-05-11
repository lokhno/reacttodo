import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCCBcpLdIKzR-fIVXJ_PRcRD7a5miePykA",
    authDomain: "reacttodo-b72da.firebaseapp.com",
    databaseURL: "https://reacttodo-b72da.firebaseio.com",
    projectId: "reacttodo-b72da",
    storageBucket: "reacttodo-b72da.appspot.com",
    messagingSenderId: "462461185897",
    appId: "1:462461185897:web:65029b7780dd26fad657f8",
});

var db = firebase.firestore();

export { db };
