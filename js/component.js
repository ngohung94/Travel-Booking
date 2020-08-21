const components = {}
components.homePageScreen = 
`
<div class="tour-container">
<header>
    <div class="header-container">
        <div id="logo">bookingtravel.vn</div>
        <div>
            <ul class="header-chosen">
                <li>Khách sạn</li>
                <li>Vé máy bay</li>
                <li>Tour</li>
                <li>Cẩm nang du lịch</li>
            </ul>
        </div>
        <div>
            <ul class="icons-notification">
                <li>
                    <div>  
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Basket</span>
                    </div>
                </li>
                <li>
                    <div class="listLogin">
                        <i class="far fa-user"> 
                            <ul class='drop-downs-login'>
                                <li id="clickLogin">Login</li>
                                <li id="clickRegister">Register</li>
                            </ul>
                        </i>
                        <span>Login</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>
<div class="tour-img">
    <div class="aside-mid">
        <form id="tour-search">
            <div id="tour-search-content">Bạn muốn đi du lịch ở đâu?</div>
            <input type="text" placeholder="Nhập địa danh">
            <div id="tour-search-submit">
                <button class="btn cursor" type="submit">tìm Tour</button>
            </div>
        </form>
    </div>
</div>
<footer>
    <div class="footer-container">
        <h2 class="tour-country">Tour trong nước</h2>
        <hr>
        <div class="img-country-tour">
            <ul class="mini-tour-img">
                <li>
                    <div>
                        <a href="#"></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</footer>
</div>



<div id="login" class="modal">
<div class="modal-content">
    <div id="loginModal">
        <div class="modal-header">
            <h4 class="modal-title">LOGIN</h4>              
            <span id="closeLogin" class="close">x</span>
        </div>
        <div class="modal-body">
            <form  id="login-form">
                <div class="input-login-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-error"></div>
                    </div>
                </div>
                <div class="form-action">
                    <span id="redirect-to-register"  >
                        Don't have an account? Register
                    </span>
                    <button class="btn" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
`

components.registerScreen = 
`
<div class="tour-container">
<header>
    <div class="header-container">
        <div id="logo">bookingtravel.vn</div>
        <div>
            <ul class="header-chosen">
                <li>Khách sạn</li>
                <li>Vé máy bay</li>
                <li>Tour</li>
                <li>Cẩm nang du lịch</li>
            </ul>
        </div>
        <div>
            <ul class="icons-notification">
                <li>
                    <div>  
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Basket</span>
                    </div>
                </li>
                <li>
                    <div class="listLogin">
                        <i class="far fa-user"> 
                            <ul class='drop-downs-login'>
                                <li id="clickLogin">Login</li>
                                <li id="clickRegister">Register</li>
                            </ul>
                        </i>
                        <span>Login</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>


<div id="login" class="modal">
<div class="modal-content">
    <div id="loginModal">
        <div class="modal-header">
            <h4 class="modal-title">LOGIN</h4>              
            <span id="closeLogin" class="close">x</span>
        </div>
        <div class="modal-body">
            <form  id="login-form">
                <div class="input-login-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-error"></div>
                    </div>
                </div>
                <div class="form-action">
                    <span id="redirect-to-register"  >
                        Don't have an account? Register
                    </span>
                    <button class="btn" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>

<div class="registerBody">
<div class="registerForm">
    <div class="register-header">
        <h4  >REGISTER</h4>              
    </div>
    <div class="modal-content">
        <div id="loginModal">
            <div class="modal-body">
                <form  id="register-form">
                    <div class="input-name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="First name">
                            <div class="error" id="first-name-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Last name">
                            <div class="error" id="last-name-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" placeholder="Email...." name="email">
                            <div class="error" id="email-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="password" placeholder="Password...." name="password">
                            <div class="error" id="password-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="password" placeholder="Confirm password" name="confirmPassword">
                            <div class="error" id="confirm-password-error"></div>
                        </div>
                    </div>
                    <div class="form-action">
                        <button class="btn btn-register" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
</div>


`