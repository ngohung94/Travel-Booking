const controller = {}
controller.register = (data) => {
    if (data.firstName.trim() === ''){
      view.setErrorMessage('first-name-error', 'Please input first name')
    }else {
      view.setErrorMessage('first-name-error', '')
    }
    if (data.lastName.trim() === ''){
      view.setErrorMessage('last-name-error' , 'Please input last name')
    }else {
      view.setErrorMessage('last-name-error', '')
    }
    if (data.email.trim() === ''){
      view.setErrorMessage('email-register-error' , 'Please input email')
    }else {
      view.setErrorMessage('email-register-error', '')
    }
    if (data.password.trim() === ''){
      view.setErrorMessage('password-register-error' , 'Please input password')
    }else {
      view.setErrorMessage('password-register-error', '')
    }
    if (data.confirmPassword.trim() === ''){
      view.setErrorMessage('confirm-password-register-error' , 'Please input confirm password')
    }else if ( data.password !== data.confirmPassword ){
      view.setErrorMessage('confirm-password-register-error' , `Password didn't match`)
    }else{
      view.setErrorMessage('confirm-password-register-error' , '')
    }
    if(data.firstName.trim() !== '' && data.lastName.trim() !== '' && data.email.trim() !== '' && data.password.trim() !== '' && data.confirmPassword.trim() !== '' && data.password.trim() === data.confirmPassword.trim()){
      model.register(data)
    }
  }
controller.login = (dataLogin) =>{
    if (dataLogin.email.trim() === ''){
        view.setErrorMessage('email-login-error' , 'Please input email')
    }else {
        view.setErrorMessage('email-login-error', '')
    }
    if (dataLogin.password.trim() === ''){
        view.setErrorMessage('password-login-error' , 'Please input password')
    }else {
        view.setErrorMessage('password-login-error', '')
    }
    if(dataLogin.email.trim() !== '' && dataLogin.password.trim() !== ''){
        model.login(dataLogin)
    }
}

controller.forgotPassword  = (data) => {
  if (data.trim() === ''){
    view.setErrorMessage('forgot-email-error' , 'Please input email')
  }else {
    view.setErrorMessage('forgot-email-error', '')
  }
}