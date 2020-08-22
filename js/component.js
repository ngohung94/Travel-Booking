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
            <input style="padding-left: 10px;" type="text" placeholder="Nhập địa danh">
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
    <div class="body-thumbnails">
        <ul class="eight-thumbnails"><br>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Đà Lạt">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/đà lạt.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Đà Lạt</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Nha Trang">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/nha trang.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Nha Trang</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Đà nẵng">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/đà nẵng.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Đà Nẵng</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Hạ Long">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/hạ long.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Hạ Long</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Sa Pa">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/sapa.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Sa Pa</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Phan Thiết">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/phan thiết.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Phan Thiết</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Hà Giang">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/hà giang.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Hà GIang</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Phú Quốc">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/phú quốc.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Phú Quốc</strong>
                        </h3>
                    </a>
                </div>
            </li>

        </ul>
    </div>
    <h2 class="tour-country">Tour nước ngoài</h2>
    <hr>
    <div class="body-thumbnails">
        <ul class="eight-thumbnails"><br>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Thái Lan">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/thái lan.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Thái Lan</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Singapore">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/singapor.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Singapore</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Trung Quốc">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/trung quốc.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Trung Quốc</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Nhật Bản">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/nhật bản.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Nhật Bản</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Hong Kong">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/hồng kông.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Hong Kong</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Campuchia">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/campuchia.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Campuchia</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Pháp">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/phap.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Pháp</strong>
                        </h3>
                    </a>
                </div>
            </li>
            <li class="box-thumbnails">
                <div class="item-thumbnail">
                    <a href="#" title="Tour du lịch Hàn Quốc">
                        <img style="width: 287px; height: 218px;" class="img-responsive" src="../img/img-tour/hàn quốc.jpg"  alt="Not Found">
                        <h3 class="item-name">
                            <strong class="text-df">Hàn Quốc</strong>
                        </h3>
                    </a>
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