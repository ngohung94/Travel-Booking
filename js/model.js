const model = {}

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
// model.login = async (dataLogin) => {
//     try {
//         const response =  await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
//         console.log(response)
//             if (response.user.emailVerified === false){
//                 document.getElementById('email-error').innerText  = 'Please verify your email'
//             }else{
//                 model.currentUser = {
//                     displayName : response.user.displayName,
//                     email : response.user.email
//                 } 
//                 view.setActiveScreen('chatScreen')
//             }
//     } catch(err){
//         console.log(err)
//         if (err.code == 'auth/user-not-found' || err.code == 'auth/invalid-email') {
//             document.getElementById('email-error').innerText  = `${err.message}`
//         } else if (err.code == 'auth/wrong-password') {
//         document.getElementById('password-error').innerText  = `${err.message}`
//         }
//     }
// }