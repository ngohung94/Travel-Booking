const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'homePageScreen' :
        // in ra man trang chu
        document.getElementById('app').innerHTML = components.homePageScreen
        
        // Login
        const loginForm = document.getElementById('login-form')
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault()
            loginForm.email.value = loginForm.email.value.trim()
            const dataLogin = {
                email: loginForm.email.value,
                password: loginForm.password.value
        }
            controller.login(dataLogin)
        })
        // sang man register
        const clickRegister = document.getElementById('clickRegister')
        clickRegister.addEventListener('click',() => {
            view.setActiveScreen('registerScreen')
        })
        const clickToRegister = document.getElementById('redirect-to-register')
        clickToRegister.addEventListener('click',() => {
            view.setActiveScreen('registerScreen')
        })
        
        break;
        case 'registerScreen' :
        document.getElementById('app').innerHTML = components.registerScreen
        const registerForm = document.getElementById('register-form')
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const dataRegister = {
                firstName: registerForm.firstName.value,
                lastName: registerForm.lastName.value,
                email: registerForm.email.value,
                password: registerForm.password.value,
                confirmPassword: registerForm.confirmPassword.value
            }
            controller.register(dataRegister)
        })
        const backToHomePage = document.getElementById('logo')
        backToHomePage.addEventListener('click',() => {
            view.setActiveScreen('homePageScreen')
        })
        break;
    }
    const clickLogin = document.getElementById('clickLogin')
    clickLogin.addEventListener('click',() => {
        document.getElementById('login').style = 'display:block'
    })
    const closeLogin = document.getElementById('closeLogin')
    closeLogin.addEventListener('click',() => {
        document.getElementById('login').style = 'display:none'
    })
}

view.setErrorMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message
}
view.addLogOut = () => {
    const logOut = document.createElement('li')
    logOut.id = "logOut"
    logOut.innerText = `Log Out`
    document.querySelector('.drop-downs-login').appendChild(logOut)
    document.getElementById("logOut").addEventListener("click", (e) => {
                e.preventDefault()  
                firebase.auth().signOut().then(() => {
                alert("Sign-out successful.")
                })
            })
    document.getElementById('clickLogin').style = "display : none"
    document.getElementById('clickRegister').style = "display : none"
}
