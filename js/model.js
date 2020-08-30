const model = {}
model.tourInfoName='';
model.register = async (data) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()

        alert('The email has been registered, please check you email!')
        view.setActiveScreen('homePageScreen')
        } catch(err) {
        console.log(err)
        alert(err.message)
        }          
}
model.login = async (dataLogin) => {
    try {
        const response =  await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
        // if (response.user.emailVerified) {
        //     const logOut =  document.createElement('li')
        //     logOut.id = "logOut"
        //     logOut.innerText = `Log Out` 
        //     logOut.addEventListener("click", (e) => {
        //         e.preventDefault()
        //         firebase.auth().signOut().then(() => {
        //             alert("Sign-out successful.")
        //             view.setActiveScreen('hotelPage')
        //         })
        //     })
        //     document.querySelector('.drop-downs-login ul').appendChild(logOut)
        //     document.getElementById('itemLogin').innerText = `${dataLogin.email}` 
        //     document.getElementById('clickLogin').style.display = "none"
        //     document.getElementById('clickRegister').style.display = "none"
        // }
    } catch(err){
        console.log(err)
        if (err.code == 'auth/user-not-found' || err.code == 'auth/invalid-email') {
            document.getElementById('email-error').innerText  = `${err.message}`
        } else if (err.code == 'auth/wrong-password') {
        document.getElementById('password-error').innerText  = `${err.message}`
        }
    }
}