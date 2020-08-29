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
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        const logOut = document.createElement('li')
        logOut.id = "logOut"
        logOut.innerText = `Log Out`
        logOut.addEventListener("click", (e) => {
          e.preventDefault()
          firebase.auth().signOut().then(() => {
            alert("Sign-out successful.")
            view.setActiveScreen('hotelPage')
          })
        })
        document.querySelector('.drop-downs-login ul').appendChild(logOut)
        document.getElementById('itemLogin').innerText = `${model.currentUser.displayName}`
        document.getElementById('clickLogin').style.display = "none"
        document.getElementById('clickRegister').style.display = "none"
      } else {
        document.getElementById('email-error').innerText = 'Please verify your email'
      }
    }
  });
}
window.onload = init;