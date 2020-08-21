const init = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCqvemLr_nB1KQ3s0bdsqpAdJ-2YA_vHiU",
        authDomain: "travel-booking-2d80a.firebaseapp.com",
        databaseURL: "https://travel-booking-2d80a.firebaseio.com",
        projectId: "travel-booking-2d80a",
        storageBucket: "travel-booking-2d80a.appspot.com",
        messagingSenderId: "459995444251",
        appId: "1:459995444251:web:f5c91af0bf9f02ddf034be",
        measurementId: "G-2QEK899VD3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    view.setActiveScreen('homePageScreen')

} 
window.onload = init;