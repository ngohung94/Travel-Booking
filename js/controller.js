const controller = {}
controller.register = (dataRegister) => {
    if (dataRegister.firstName.trim() === ''){
        view.setErrorMessage('first-name-error', 'Please input first name')
    }else {
        view.setErrorMessage('first-name-error', '')
    }
    if (dataRegister.lastName.trim() === ''){
        view.setErrorMessage('last-name-error' , 'Please input last name')
    }else {
        view.setErrorMessage('last-name-error', '')
    }
    if (dataRegister.email.trim() === ''){
        view.setErrorMessage('email-error' , 'Please input email')
    }else {
        view.setErrorMessage('email-error', '')
    }
    if (dataRegister.password.trim() === ''){
        view.setErrorMessage('password-error' , 'Please input password')
    }else {
        view.setErrorMessage('password-error', '')
    }
    if (dataRegister.confirmPassword.trim() === ''){
        view.setErrorMessage('confirm-password-error' , 'Please input confirm password')
    }else if ( dataRegister.password !== dataRegister.confirmPassword ){
        view.setErrorMessage('confirm-password-error' , `Password didn't match`)
    }else{
        view.setErrorMessage('confirm-password-error' , '')
    }

    if(dataRegister.firstName.trim() !== '' && dataRegister.lastName.trim() !== '' && dataRegister.email.trim() !== '' && dataRegister.password.trim() !== '' && dataRegister.confirmPassword.trim() !== '' && dataRegister.password.trim() === dataRegister.confirmPassword.trim()){
        model.register(dataRegister)
    }
}
controller.login = (dataLogin) =>{
    if (dataLogin.email.trim() === ''){
        view.setErrorMessage('email-error' , 'Please input email')
    }else {
        view.setErrorMessage('email-error', '')
    }
    if (dataLogin.password.trim() === ''){
        view.setErrorMessage('password-error' , 'Please input password')
    }else {
        view.setErrorMessage('password-error', '')
    }
    if(dataLogin.email.trim() !== '' && dataLogin.password.trim() !== ''){
        model.login(dataLogin)
    }
}