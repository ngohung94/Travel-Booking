const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'homePageScreen' :
        // in ra man trang chu
        document.getElementById('app').innerHTML = components.homePageScreen
        
        // Login
        const clickLogin = document.getElementById('clickLogin')
        clickLogin.addEventListener('click',() => {
            document.getElementById('login').style = 'display:block'
        })
        const close = document.getElementById('close')
        close.addEventListener('click',() => {
            document.getElementById('login').style = 'display:none'
        })
        break;
    }
}