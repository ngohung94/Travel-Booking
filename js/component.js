const components = {}

components.hotelPage = `
<div class="video-wrapper">
<video autoplay muted loop id="myVideo">
  <source src="../img/img-hotel/video.webm" type="video/mp4">
</video>
<div class="overlay">
  <div class='container-wrapper'>
    <div class='header'>
      <div class="header-nav">
        <div class="header-top">
          <div class="input-wrapper">
            <form class='form-control'>
              <div class="iconSearch icon-primary">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
              <input type="text" placeholder="Search...">
            </form>
          </div>
          <div class='social'>
            <div class='social-fb icon-primary cursor'>
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </div>
            <div class='social-ins icon-primary cursor'>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div class='social-tw icon-primary cursor'>
              <i class="fa fa-twitter"></i>
            </div>
            <div class='social-yt icon-primary cursor'>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="header-bottom">
          <div class="logo-container cursor" onClick = "router.navigate('/hotel')">
            <div class="logo" >
              <img src="../img/img-hotel/logo.png">
            </div>
          </div>
          <div class="navigation-wrapper">
            <ul>
              <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
              <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
              <li onClick = "router.navigate('/travelGuide')"><a>Cẩm nang</a></li>
              <div class="login">
                <div class="logo-login icon-secondary">
                  <i class="fa fa-sign-in"></i>
                </div>
                <div class="drop-downs-login">
                    <ul>
                        <li id="clickLogin">Login</li>
                        <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                    </ul>
                </div>
                <span><a id="itemLogin">Login</a></span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-content">
        <div class="heading">
          <h2>Make your vacation</h2>
          <h2>comfortable</h2>
        </div>
        <form class="form-wrapper">
          <div class="input-wrapper icon-primary">
            <i class="fa fa-map-marker"></i>
            <input class = "search-input" type="text" placeholder="Nhập tên khách sạn" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-calendar"></i>
            <input  id="date-input1" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
              data-dd-theme="leaf" placeholder="Chọn ngày đi" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-calendar"></i>
            <input  id="date-input2" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
              data-dd-theme="leaf" placeholder="Chọn ngày về" />
          </div>
          <div  class="input-wrapper icon-primary">
            <i class="fa fa-hotel"></i> <input class = "search-input" type="text" placeholder="Nhập số phòng" />
          </div>
          <div class = "search-input" class="btn-wrapper">
            <button class="btn btn-primary">Tìm khách sạn</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>

<div class="content-wrapper wrapper">
<div class="container-wrapper">
  <h1 class="title-common-trips">Điểm đến phổ biến Việt Nam</h1>
  <div id="common-trips-vietnam" class="common-trips-wrapper">
  </div>
  <h1 class="title-common-trips">Điểm đến phổ biến nước ngoài</h1>
  <div id="common-trips-foreign" class="common-trips-wrapper"></div>
</div>
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
                    <div class="input-wrapper1">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-login-error"></div>
                    </div>
                    <div class="input-wrapper1">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-login-error"></div>
                    </div>
                </div>
                <div class="form-action">
                <button class="btn1 btn-register" type="submit">
                    Login
                </button>
                </div>
                <div class="form-action">
                    <span onClick="view.setActiveScreen('registerScreen')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="view.setActiveScreen('forgotPassword')">
                        Forgot password
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
`
components.innerHotel = `
<div class="header header-sticky">
    <div class="container-wrapper">
        <div class="header-bottom">
            <div onClick = "router.navigate('/hotel')" class="logo-container cursor">
                <div class="logo">
                    <img src="../img/img-hotel/logo.png">
                </div>
            </div>
            <div class="navigation-wrapper">
            <ul>
                <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                <li><a>Cẩm nang</a></li>
                <div class="login">
                    <div class="logo-login icon-secondary">
                    <i class="fa fa-sign-in"></i>
                    </div>
                    <div class="drop-downs-login">
                        <ul>
                            <li id="clickLogin">Login</li>
                            <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                        </ul>
                    </div>
                    <span><a>Login</a></span>
                </div>
            </ul>
            </div>
        </div>
    </div>
</div>

<div class="main-content-hotel">
<div class="container-wrapper">
  <div class="category-hotel">
    <div class="left-main-content-hotel">
      <div class="filter-hotel">
        <h3 class="title">Lọc khách sạn theo</h3>
        <div class="input-wrapper">
          <input type="text" placeholder="Tên khách sạn, địa chỉ ...">
        </div>
      </div>
      <div class="filter-price">
        <h3 class="title">Theo mức giá</h3>
        <ul>
          <li><button class="btn">Dưới 1tr</button></li>
          <li><button class="btn">Từ 1tr đến 2tr</button></li>
          <li><button class="btn">Từ 2tr đến 3tr</button></li>
        </ul>
      </div>
      <div class="filter-rating">
        <h3 class="title">Xếp hạng đánh giá</h2>
          <form class="form-control">
            <div class="checkbox-wrapper">
              <input type="checkbox" id="1" name="one-star" value='1' />
              <span class="fa fa-star checked"></span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="2" name="two-star" value='2'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="3" name="three-star" value='3'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="4" name="four-star" value='4'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="5" name="five-star" value='5'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
          </form>
      </div>
    </div>

    <div id="right-main-content" class="right-main-content-hotel">
    </div>
  </div>
</div>
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
                    <div class="input-wrapper1">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-login-error"></div>
                    </div>
                    <div class="input-wrapper1">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-login-error"></div>
                    </div>
                </div>
                <div class="form-action">
                <button class="btn1 btn-register" type="submit">
                    Login
                </button>
                </div>
                <div class="form-action">
                    <span onClick="view.setActiveScreen('registerScreen')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="view.setActiveScreen('forgotPassword')">
                        Forgot password
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
`
// Page detail hotel
components.detailHotel = `
<div class="header header-sticky">
    <div class="container-wrapper">
        <div class="header-bottom">
            <div onClick = "router.navigate('/hotel')" class="logo-container cursor">
                <div class="logo">
                    <img src="../img/img-hotel/logo.png">
                </div>
            </div>
            <div class="navigation-wrapper">
            <ul>
                <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                <li><a>Cẩm nang</a></li>
                <div class="login">
                    <div class="logo-login icon-secondary">
                    <i class="fa fa-sign-in"></i>
                    </div>
                    <div class="drop-downs-login">
                        <ul>
                            <li id="clickLogin">Login</li>
                            <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                        </ul>
                    </div>
                    <span><a>Login</a></span>
                </div>
            </ul>
            </div>
        </div>
    </div>
</div>

<div class="detail-hotel">
<div class="container-wrapper">
  <div id="header-top-content" class="header-top-content">
  </div>

  <div id='image-overview' class="image-overview">
  </div>

  <h2 class="category-hotel">Danh sách các phòng</h2>
  <div id="one-hotel-review" class="one-hotel-review">
  </div>
</div>
</div>

`

components.tourPage =
    `
<div class="header header-sticky">
    <div class="container-wrapper">
        <div class="header-bottom">
            <div onClick = "router.navigate('/hotel')" class="logo-container cursor">
                <div class="logo">
                    <img src="../img/img-hotel/logo.png">
                </div>
            </div>
            <div class="navigation-wrapper">
            <ul>
                <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                <li onClick = "router.navigate('/travelGuide')"><a>Cẩm nang</a></li>
                <div class="login">
                    <div class="logo-login icon-secondary">
                    <i class="fa fa-sign-in"></i>
                    </div>
                    <div class="drop-downs-login">
                        <ul>
                            <li id="clickLogin">Login</li>
                            <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                        </ul>
                    </div>
                    <span><a>Login</a></span>
                </div>
            </ul>
            </div>
        </div>
    </div>
</div>
<div class="tour-container">
    <div class="tour-img">
    <div class="aside-mid">
        <form id="tour-search">
            <div id="tour-search-content">Bạn muốn đi du lịch ở đâu?</div>
            <input style = "padding-left: 10px;" type="text" placeholder="Nhập địa danh">
            <div id="tour-search-submit">
                <button class="btn cursor" type="submit">tìm Tour</button>
            </div>
        </form>
    </div>
</div>
</div>
<footer>
<div class="footer-container">
    <h2 class="tour-country">Tour trong nước</h2>
    <hr class = "hr-space">
    <div class="body-thumbnails">
        <ul id = "common-tour" class="eight-thumbnails"><br>

        </ul>
    </div>

    <h2 class="tour-country">Tour nước ngoài</h2>
    <hr class = "hr-space">
    <div class="body-thumbnails">
        <ul id = "foreign-tour" class="eight-thumbnails"><br>
          
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
                    <div class="input-wrapper1">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-login-error"></div>
                    </div>
                    <div class="input-wrapper1">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-login-error"></div>
                    </div>
                </div>
                <div class="form-action">
                <button class="btn1 btn-register" type="submit">
                    Login
                </button>
                </div>
                <div class="form-action">
                    <span onClick="view.setActiveScreen('registerScreen')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="view.setActiveScreen('forgotPassword')">
                        Forgot password
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
`;

///// phan trong tour:
components.innerTourTrips = `
<div class="header header-sticky">
<div class="container-wrapper">
    <div class="header-bottom">
        <div onClick = "router.navigate('/hotel')" class="logo-container cursor">
            <div class="logo">
                <img src="../img/img-hotel/logo.png">
            </div>
        </div>
        <div class="navigation-wrapper">
            <ul>
                <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                <li><a>Cẩm nang</a></li>
                <div class="login">
                    <div class="logo-login icon-secondary">
                        <i class="fa fa-sign-in"></i>
                    </div>
                    <div class="drop-downs-login">
                        <ul>
                            <li id="clickLogin">Login</li>
                            <li onClick="view.setActiveScreen('registerScreen')">Register</li>
                        </ul>
                    </div>
                    <span><a>Login</a></span>
                </div>
            </ul>
        </div>
    </div>
</div>
</div>
<div id="login" class="modal">
<div class="modal-content">
    <div id="loginModal">
        <div class="modal-header">
            <h4 class="modal-title">LOGIN</h4>
            <span id="closeLogin" class="close">x</span>
        </div>
        <div class="modal-body">
            <form id="login-form">
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
                    <span id="redirect-to-register">
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
<div class="innerTourContainer">
<div class="home-page-tour">
    <span class="home-page-tour-content">Tour du lịch</span> > <span class="home-page-tour-content">Tour du lịch
        Viện Nam</span> > <span class="home-page-tour-content">Tour du lịch tỉnh ....</span>
    <hr class="hr-innerTour-style">
</div>

<div class="box-tour-main">
    <div class="aside-left">
        <div class="category-hotel">
            <div class="left-main-content-hotel">
                <div class="filter-hotel">
                    <h3 class="title">Lọc Tour theo</h3>
                    <div class="input-wrapper">
                        <input type="text" placeholder="Tên tour ...">
                    </div>
                </div>
                <div class="filter-price">
                    <h3 class="title">Theo mức giá</h3>
                    <ul>
                        <li><button class="btn">Dưới 1tr</button></li>
                        <li><button class="btn">Từ 1tr đến 2tr</button></li>
                        <li><button class="btn">Từ 2tr đến 3tr</button></li>
                    </ul>
                </div>
                <div class="filter-rating">
                    <h3 class="title">Xếp hạng đánh giá</h2>
                        <form class="form-control">
                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="1" name="one-star" value='1' />
                                <span class="fa fa-star checked"></span>
                            </div>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="2" name="two-star" value='2'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="3" name="three-star" value='3'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="4" name="four-star" value='4'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="5" name="five-star" value='5'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </form>
                </div>
            </div>

            <div id="right-main-content" class="right-main-content-hotel">
            </div>
        </div>
    </div>

    <div class="aside-right">
        <h1 id = "name-tour">TOUR ĐI ....</h1>
        <ul class="tour-chosen-items">
            <li class="tour-items-hover cursor">Phổ biến nhất</li>
            <li class="tour-items-hover cursor">Giá</li>
            <li class="tour-items-hover cursor">Số ngày</li>
            <li class="tour-items-hover cursor">Sắp khởi hành</li>
            <li class="tour-items-hover cursor">Đánh giá cao</li>
            <li class="tour-items-hover cursor">Khuyến mãi</li>
        </ul>
        <hr class="hr-innerTour-style">

        <div id="list-tour-available-show">
            
            
            
        </div>
    </div>
</div>
</div>
`;

components.registerScreen =
    `
<div class="header header-sticky">
    <div class="container-wrapper">
        <div class="header-bottom">
            <div onClick = "router.navigate('/hotel')" class="logo-container cursor">
                <div class="logo">
                    <img src="../img/img-hotel/logo.png">
                </div>
            </div>
            <div class="navigation-wrapper">
            <ul>
                <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                <li><a>Cẩm nang</a></li>
                <div class="login">
                    <div class="logo-login icon-secondary">
                    <i class="fa fa-sign-in"></i>
                    </div>
                    <div class="drop-downs-login">
                        <ul>
                            <li id="clickLogin">Login</li>
                            <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                        </ul>
                    </div>
                    <span><a>Login</a></span>
                </div>
            </ul>
            </div>
        </div>
    </div>
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
                    <div class="input-wrapper1">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-login-error"></div>
                    </div>
                    <div class="input-wrapper1">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-login-error"></div>
                    </div>
                </div>
                <div class="form-action">
                <button class="btn1 btn-register" type="submit">
                    Login
                </button>
                </div>
                <div class="form-action">
                    <span onClick="view.setActiveScreen('registerScreen')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="view.setActiveScreen('forgotPassword')">
                        Forgot password
                    </span>
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
                        <div class="input-wrapper1">
                            <input type="text" name="firstName" placeholder="First name">
                            <div class="error" id="first-name-error"></div>
                        </div>
                        <div class="input-wrapper1">
                            <input type="text" name="lastName" placeholder="Last name">
                            <div class="error" id="last-name-error"></div>
                        </div>
                        <div class="input-wrapper1">
                            <input type="text" placeholder="Email...." name="email">
                            <div class="error" id="email-register-error"></div>
                        </div>
                        <div class="input-wrapper1">
                            <input type="password" placeholder="Password...." name="password">
                            <div class="error" id="password-register-error"></div>
                        </div>
                        <div class="input-wrapper1">
                            <input type="password" placeholder="Confirm password" name="confirmPassword">
                            <div class="error" id="confirm-password-register-error"></div>
                        </div>
                    </div>
                    <div class="form-action">
                        <button class="btn1 btn-register" type="submit">
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


components.forgotPassword =
    `
<div class="header header-sticky">
    <div class="container-wrapper">
        <div class="header-bottom">
            <div class="logo-container cursor" onClick = "router.navigate('/hotel')">
                <div class="logo">
                    <img src="../img/img-hotel/logo.png">
                </div>
            </div>
            <div class="navigation-wrapper">
            <ul>
                <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                <li><a>Cẩm nang</a></li>
                <div class="login">
                    <div class="logo-login icon-secondary">
                    <i class="fa fa-sign-in"></i>
                    </div>
                    <div class="drop-downs-login">
                        <ul>
                            <li id="clickLogin">Login</li>
                            <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                        </ul>
                    </div>
                    <span><a>Login</a></span>
                </div>
            </ul>
            </div>
        </div>
    </div>
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
                    <div class="input-wrapper1">
                        <input type="text" placeholder="Email...." name="email">
                        <div class="error" id="email-login-error"></div>
                    </div>
                    <div class="input-wrapper1">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-login-error"></div>
                    </div>
                </div>
                <div class="form-action">
                <button class="btn1 btn-register" type="submit">
                    Login
                </button>
                </div>
                <div class="form-action">
                    <span onClick="view.setActiveScreen('registerScreen')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="view.setActiveScreen('forgotPassword')">
                        Forgot password
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
</div>


<div class="box-body">
    <h1 class="title-forgot">
        Khôi phục mật khẩu
    </h1>
    <form id="forgotPass">
                <div>
                    <input type="radio" checked="">
                    Lấy lại mật khẩu bằng email.
                </div>     
                <div>
                    Địa chỉ email :
                </div>
                <div>
                    <input class="send-email" name="email" type="text">
                    <span class="error" id="forgot-email-login-error"></span>
                </div>
                <p class="">
                    Để đặt lại mật khẩu của mình, hãy nhập địa chỉ email mà bạn sử dụng để đăng nhập
                    vào hệ thống.
                </p>
        <div class="btnn">
            <button class="btn2" type="submit" id="forgotPassword">Khôi phục mật khẩu</button>
        </div>  
    </form>
</div>

`




components.travelGuide = `
<div class="tour-container">
        <header>
        <div class="header header-sticky">
        <div class="container-wrapper">
            <div class="header-bottom">
                <div onClick = "router.navigate('/hotel')" class="logo-container cursor">
                    <div class="logo">
                        <img src="../img/img-hotel/logo.png">
                    </div>
                </div>
                <div class="navigation-wrapper">
                <ul>
                    <li onClick = "router.navigate('/hotel')"><a>Khách sạn</a></li>
                    <li><a>Vé máy bay</a></li>
                    <li onClick = "router.navigate('/tour')"><a>Tour</a></li>
                    <li><a>Cẩm nang</a></li>
                    <div class="login">
                        <div class="logo-login icon-secondary">
                        <i class="fa fa-sign-in"></i>
                        </div>
                        <div class="drop-downs-login">
                            <ul>
                                <li id="clickLogin">Login</li>
                                <li id="clickRegister" onClick="view.setActiveScreen('registerScreen')">Register</li>
                            </ul>
                        </div>
                        <span><a>Login</a></span>
                    </div>
                </ul>
                </div>
            </div>
        </div>
    </div>




            <div class="tour-container">
                <div class="title"><a href="/location">Cẩm nang du lịch</a> </div>
                <div class="placeTravel">
                    <div class="menu">


                        <li><a href="#">Miền Bắc</a>
                            <ul class="sub-menu">

                                <li><a href="/location/c2/du-lich-ha-noi.html">Hà Nội</a></li>
                                <li><a href="/location/c6/du-lich-bac-ninh.html">Bắc Ninh</a></li>
                                <li><a href="/location/c7/du-lich-bac-giang.html">Bắc Giang</a></li>
                                <li><a href="/location/c14/du-lich-bac-kan.html">Bắc Kạn</a></li>
                                <li><a href="/location/c20/du-lich-lao-cai.html">Lào Cai</a></li>
                                <li><a href="/location/c21/du-lich-quang-ninh.html">Quảng Ninh</a></li>
                                <li><a href="/location/c23/du-lich-nam-dinh.html">Nam Định</a></li>
                                <li><a href="/location/c25/du-lich-cao-bang.html">Cao Bằng</a></li>
                                <li><a href="/location/c27/du-lich-ha-giang.html">Hà Giang</a></li>
                                <li><a href="/location/c28/du-lich-ha-nam.html">Hà Nam</a></li>
                                <li><a href="/location/c31/du-lich-hai-duong.html">Hải Dương</a></li>
                                <li><a href="/location/c32/du-lich-hai-phong.html">Hải Phòng</a></li>
                                <li><a href="/location/c33/du-lich-hoa-binh.html">Hoà Bình</a></li>
                                <li><a href="/location/c34/du-lich-hung-yen.html">Hưng Yên</a></li>
                                <li><a href="/location/c37/du-lich-lai-chau.html">Lai Châu</a></li>
                                <li><a href="/location/c39/du-lich-lang-son.html">Lạng Sơn</a></li>
                                <li><a href="/location/c42/du-lich-ninh-binh.html">Ninh Bình</a></li>
                                <li><a href="/location/c44/du-lich-phu-tho.html">Phú Thọ</a></li>
                                <li><a href="/location/c51/du-lich-son-la.html">Sơn La</a></li>
                                <li><a href="/location/c53/du-lich-thai-binh.html">Thái Bình</a></li>
                                <li><a href="/location/c54/du-lich-thai-nguyen.html">Thái Nguyên</a></li>
                                <li><a href="/location/c58/du-lich-tuyen-quang.html">Tuyên Quang</a></li>
                                <li><a href="/location/c60/du-lich-vinh-phuc.html">Vĩnh Phúc</a></li>
                                <li><a href="/location/c61/du-lich-yen-bai.html">Yên Bái</a></li>
                                <li><a href="/location/c71/du-lich-dien-bien.html">Điện Biên</a></li>
                            </ul>
                        </li>

                        <li><a href="#">Miền Trung</a>
                            <ul class="sub-menu">


                                <li><a href="/location/c9/du-lich-binh-dinh.html">Bình Định</a></li>
                                <li><a href="/location/c65/du-lich-da-nang.html">Đà Nẵng</a></li>
                                <li><a href="/location/c17/du-lich-khanh-hoa.html">Khánh Hòa</a></li>
                                <li><a href="/location/c19/du-lich-thua-thien-hue.html">Thừa Thiên Huế</a></li>
                                <li><a href="/location/c26/du-lich-gia-lai.html">Gia Lai</a></li>
                                <li><a href="/location/c30/du-lich-ha-tinh.html">Hà Tĩnh</a></li>
                                <li><a href="/location/c36/du-lich-kon-tum.html">Kon Tum</a></li>
                                <li><a href="/location/c41/du-lich-nghe-an.html">Nghệ An</a></li>
                                <li><a href="/location/c45/du-lich-phu-yen.html">Phú Yên</a></li>
                                <li><a href="/location/c46/du-lich-quang-binh.html">Quảng Bình</a></li>
                                <li><a href="/location/c47/du-lich-quang-nam.html">Quảng Nam</a></li>
                                <li><a href="/location/c48/du-lich-quang-ngai.html">Quảng Ngãi</a></li>
                                <li><a href="/location/c49/du-lich-quang-tri.html">Quảng Trị</a></li>
                                <li><a href="/location/c55/du-lich-thanh-hoa.html">Thanh Hoá</a></li>
                                <li><a href="/location/c62/du-lich-dak-lak.html">Đắk Lắk</a></li>
                                <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">

                            </ul>
                        </li>


                        <li> <a href="#">Miền Nam</a>
                            <ul class="sub-menu">

                                <li><a href="/location/c3/du-lich-ho-chi-minh.html">Hồ Chí Minh</a></li>
                                <li><a href="/location/c4/du-lich-an-giang.html">An Giang</a></li>
                                <li><a href="/location/c5/du-lich-ba-ria-vung-tau.html">Bà Rịa - Vũng Tàu</a></li>
                                <li><a href="/location/c8/du-lich-binh-duong.html">Bình Dương</a></li>
                                <li><a href="/location/c10/du-lich-binh-phuoc.html">Bình Phước</a></li>
                                <li><a href="/location/c11/du-lich-binh-thuan.html">Bình Thuận</a></li>
                                <li><a href="/location/c13/du-lich-ben-tre.html">Bến Tre</a></li>
                                <li><a href="/location/c15/du-lich-can-tho.html">Cần Thơ</a></li>
                                <li><a href="/location/c57/du-lich-tra-vinh.html">Trà Vinh</a></li>
                                <li><a href="/location/c22/du-lich-dong-nai.html">Đồng Nai</a></li>
                                <li><a href="/location/c24/du-lich-ca-mau.html">Cà Mau</a></li>
                                <li><a href="/location/c35/du-lich-kien-giang.html">Kiên Giang</a></li>
                                <li><a href="/location/c38/du-lich-lam-dong.html">Lâm Đồng</a></li>
                                <li><a href="/location/c40/du-lich-long-an.html">Long An</a></li>
                                <li><a href="/location/c43/du-lich-ninh-thuan.html">Ninh Thuận</a></li>
                                <li><a href="/location/c50/du-lich-soc-trang.html">Sóc Trăng</a></li>
                                <li><a href="/location/c52/du-lich-tay-ninh.html">Tây Ninh</a></li>
                                <li><a href="/location/c56/du-lich-tien-giang.html">Tiền Giang</a></li>
                                <li><a href="/location/c59/du-lich-vinh-long.html">Vĩnh Long</a></li>
                                <li><a href="/location/c64/du-lich-dong-thap.html">Đồng Tháp</a></li>
                                <li><a href="/location/c67/du-lich-dak-nong.html">Đắk Nông</a></li>
                                <li><a href="/location/c68/du-lich-hau-giang.html">Hậu Giang</a></li>
                                <li><a href="/location/c70/du-lich-bac-lieu.html">Bạc Liêu</a></li>

                            </ul>
                        </li>


                        <li> <a href="#">Địa danh nổi bật</a>
                            <ul class="sub-menu">

                                <li><a href="/location/c2/du-lich-ha-noi.html">Hà Nội</a></li>
                                <li><a href="/location/c3/du-lich-ho-chi-minh.html">Hồ Chí Minh</a></li>
                                <li><a href="/location/c65/du-lich-da-nang.html">Đà Nẵng</a></li>
                                <li><a href="/location/d86/du-lich-vung-tau.html">Vũng Tàu</a></li>
                                <li><a href="/location/d156/du-lich-phan-thiet.html">Phan Thiết</a></li>
                                <li><a href="/location/d309/du-lich-phu-quoc.html">Phú Quốc</a></li>
                                <li><a href="/location/d325/du-lich-nha-trang.html">Nha Trang</a></li>
                                <li><a href="/location/d346/du-lich-sapa.html">SaPa</a></li>
                                <li><a href="/location/d352/du-lich-da-lat.html">Đà Lạt</a></li>
                                <li><a href="/location/d419/du-lich-hoi-an.html">Hội An</a></li>
                                <li><a href="/location/d431/du-lich-ha-long.html">Hạ Long</a></li>
                                <li><a href="/location/d568/du-lich-hue.html">Huế</a></li>
                            </ul>
                        </li>

                        <li> <a href="#">Bãi biển đẹp</a>
                            <ul class="sub-menu">

                                <li><a href="/location/b1/du-lich-bai-do-son-hai-phong.html">Bãi Đồ Sơn - Hải Phòng</a>
                                </li>
                                <li><a href="/location/b2/du-lich-bai-tra-co-ha-long.html">Bãi Trà Cổ - Hạ Long</a></li>
                                <li><a href="/location/b3/du-lich-bai-quan-lan-ha-long.html">Bãi Quan Lạn - Hạ Long</a>
                                </li>
                                <li><a href="/location/b4/du-lich-bai-ti-top-ha-long.html">Bãi Ti Tốp - Hạ Long</a></li>
                                <li><a href="/location/b5/du-lich-bai-tuan-chau-ha-long.html">Bãi Tuần Châu - Hạ
                                        Long</a></li>
                                <li><a href="/location/b6/du-lich-bai-chay-ha-long.html">Bãi Cháy - Hạ Long</a></li>
                                <li><a href="/location/b7/du-lich-bai-nhat-le-quang-binh.html">Bãi Nhật Lệ - Quảng
                                        Bình</a></li>
                                <li><a href="/location/b8/du-lich-bai-da-nhay-quang-binh.html">Bãi Đá Nhảy - Quảng
                                        Bình</a></li>
                                <li><a href="/location/b9/du-lich-bai-non-nuoc-da-nang.html">Bãi Non Nước - Đà Nẵng</a>
                                </li>
                                <li><a href="/location/b10/du-lich-ban-dao-son-tra-da-nang.html">Bán đảo Sơn Trà - Đà
                                        Nẵng</a></li>
                                <li><a href="/location/b11/du-lich-bai-my-khe-da-nang.html">Bãi Mỹ Khê - Đà Nẵng</a>
                                </li>
                                <li><a href="/location/b12/du-lich-bai-thanh-binh-da-nang.html">Bãi Thanh Bình - Đà
                                        Nẵng</a></li>
                                <li><a href="/location/b13/du-lich-bai-dai-nha-trang.html">Bãi Dài - Nha Trang</a></li>
                                <li><a href="/location/b14/du-lich-doc-let-nha-trang.html">Dốc Lết - Nha Trang</a></li>
                                <li><a href="/location/b15/du-lich-bai-dai-lanh-nha-trang.html">Bãi Đại Lãnh - Nha
                                        Trang</a></li>
                                <li><a href="/location/b16/du-lich-bai-ninh-chu-ninh-thuan.html">Bãi Ninh Chữ - Ninh
                                        Thuận</a></li>
                                <li><a href="/location/b17/du-lich-bai-binh-tien-ninh-thuan.html">Bãi Bình Tiên - Ninh
                                        Thuận</a></li>
                                <li><a href="/location/b18/du-lich-bai-bien-doi-duong-phan-thiet.html">Bãi biển Đồi
                                        Dương - Phan Thiết</a></li>
                                <li><a href="/location/b19/du-lich-bai-rang-phan-thiet.html">Bãi Rạng - Phan Thiết</a>
                                </li>
                                <li><a href="/location/b20/du-lich-bai-co-thach-phan-thiet.html">Bãi Cổ Thạch - Phan
                                        Thiết</a></li>
                                <li><a href="/location/b21/du-lich-bai-phu-hai-phan-thiet.html">Bãi Phú Hài - Phan
                                        Thiết</a></li>
                                <li><a href="/location/b22/du-lich-ho-coc-ba-ria-vung-tau.html">Hồ Cốc - Bà Rịa Vũng
                                        Tàu</a></li>
                                <li><a href="/location/b23/du-lich-bai-dau-ba-ria-vung-tau.html">Bãi Dâu - Bà Rịa Vũng
                                        Tàu</a></li>
                                <li><a href="/location/b24/du-lich-bai-dua-ba-ria-vung-tau.html">Bãi Dứa - Bà Rịa Vũng
                                        Tàu</a></li>
                                <li><a href="/location/b25/du-lich-bai-truoc-ba-ria-vung-tau.html">Bãi Trước - Bà Rịa
                                        Vũng Tàu</a></li>
                                <li><a href="/location/b26/du-lich-bai-sau-ba-ria-vung-tau.html">Bãi sau - Bà Rịa Vũng
                                        Tàu</a></li>
                                <li><a href="/location/b27/du-lich-bai-truong-phu-quoc.html">Bãi Trường - Phú Quốc</a>
                                </li>
                                <li><a href="/location/b28/du-lich-bai-sao-phu-quoc.html">Bãi Sao - Phú Quốc</a></li>

                            </ul>
                        </li>



                    </div>

                    <div class="placeTravel">

                        <div class="page-header">
                            <h1 class="title-lg" title="Cẩm nang du lịch">
                                <a href="/location">Một số địa điểm nổi bật tại Việt Nam</a>
                            </h1>
                            <div class="dark mg-bt-10 mg-t-10"></div>
                        </div>


                        <div class="blog">
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a
                                        href="/location/14049-top-nhung-resort-dang-cap-o-ho-tram-vung-tau-o-khong-muon-ve.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/ad11597912906.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/ad11597912906.jpg"
                                            alt="Top những resort đẳng cấp ở Hồ Tràm Vũng Tàu ở không muốn về"
                                            title="Top những resort đẳng cấp ở Hồ Tràm Vũng Tàu ở không muốn về"
                                            style="width:100%;"
                                            onerror="this.onerror=null;this.src='https://staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Top những resort đẳng cấp ở Hồ Tràm Vũng Tàu ở khô ...
                                        </h2>
                                    </a>
                                </div>

                            </div>
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a
                                        href="/location/14047-ixora-da-lat-khu-vuon-co-tich-ngan-goc-song-ao-o-da-lat.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/h4d1597811626.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/h4d1597811626.jpg"
                                            alt="IXORA Đà Lạt - “khu vườn cổ tích” ngàn góc sống ảo ở Đà Lạt"
                                            title="IXORA Đà Lạt - “khu vườn cổ tích” ngàn góc sống ảo ở Đà Lạt"
                                            style="width:100%;"
                                            onerror="this.onerror=null;this.src='https:staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> IXORA Đà Lạt - “khu vườn cổ tích” ngàn góc sống ảo ...
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a href="/location/14046-top-khach-san-gan-pho-co-ha-noi-chat-luong-nhat.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/pbx1597736821.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/pbx1597736821.jpg"
                                            alt="Top khách sạn gần phố cổ Hà Nội chất lượng nhất"
                                            title="Top khách sạn gần phố cổ Hà Nội chất lượng nhất" style="width:100%;"
                                            onerror="this.onerror=null;this.src='https:staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Top khách sạn gần phố cổ Hà Nội chất lượng nhất </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a
                                        href="/location/14045-top-dia-diem-song-ao-sai-gon-ngo-la-nhung-lai-vo-cung-quen.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/e7u1597650058.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/e7u1597650058.jpg"
                                            alt="Top địa điểm sống ảo Sài Gòn ngỡ lạ nhưng lại vô cùng quen"
                                            title="Top địa điểm sống ảo Sài Gòn ngỡ lạ nhưng lại vô cùng quen"
                                            style="width:100%;"
                                            onerror="this.onerror=null;this.src='https:staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Top địa điểm sống ảo Sài Gòn ngỡ lạ nhưng lại vô c ...
                                        </h2>
                                    </a>


                                </div>
                            </div>
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a
                                        href="/location/14044-diem-danh-ngay-top-khach-san-ho-chi-minh-o-quan-1-sang-chanh-nhat.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/giw1597636970.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/giw1597636970.jpg"
                                            alt="Điểm danh ngay top khách sạn Hồ Chí Minh ở quận 1 sang chảnh nhất"
                                            title="Điểm danh ngay top khách sạn Hồ Chí Minh ở quận 1 sang chảnh nhất"
                                            style="width:100%;"
                                            onerror="this.onerror=null;this.src='https:staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Điểm danh ngay top khách sạn Hồ Chí Minh ở quận 1 ...
                                        </h2>
                                    </a>


                                </div>
                            </div>
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a href="/location/14059-3-vuon-quoc-gia-gan-ha-noi-co-gi-dac-sac.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/ix41598512888.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/ix41598512888.jpg"
                                            alt="3 vườn quốc gia gần Hà Nội có gì đặc sắc? "
                                            title="3 vườn quốc gia gần Hà Nội có gì đặc sắc? " style="width:100%;"
                                            onerror="this.onerror=null;this.src='https://staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> 3 vườn quốc gia gần Hà Nội có gì đặc sắc? </h2>
                                    </a>

                                    >
                                    <a href="/location/14059-3-vuon-quoc-gia-gan-ha-noi-co-gi-dac-sac.html">Xem thêm <i
                                            class="fa fa-angle-double-right"></i></a>

                                </div>

                            </div>
                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a
                                        href="/location/14058-neu-du-lich-gan-sai-gon-2-ngay-1-dem-di-ngay-7-bai-bien-nay.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/hhk1598510794.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/hhk1598510794.jpg"
                                            alt="Nếu du lịch gần Sài Gòn 2 ngày 1 đêm, đi ngay 7 bãi biển này"
                                            title="Nếu du lịch gần Sài Gòn 2 ngày 1 đêm, đi ngay 7 bãi biển này"
                                            style="width:100%;"
                                            onerror="this.onerror=null;this.src='https://staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Nếu du lịch gần Sài Gòn 2 ngày 1 đêm, đi ngay 7 bã ...
                                        </h2>
                                    </a>


                                    <a
                                        href="/location/14058-neu-du-lich-gan-sai-gon-2-ngay-1-dem-di-ngay-7-bai-bien-nay.html">Xem
                                        thêm <i class="fa fa-angle-double-right"></i></a>

                                </div>

                            </div>


                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a href="/location/14057-ve-can-tho-kham-pha-nhung-dia-diem-tram-nam-tuoi.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/1f41598430725.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/1f41598430725.jpg"
                                            alt="Về Cần Thơ khám phá những địa điểm trăm năm tuổi"
                                            title="Về Cần Thơ khám phá những địa điểm trăm năm tuổi" style="width:100%;"
                                            onerror="this.onerror=null;this.src='https://staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Về Cần Thơ khám phá những địa điểm trăm năm tuổi </h2>
                                    </a>


                                    <a href="/location/14057-ve-can-tho-kham-pha-nhung-dia-diem-tram-nam-tuoi.html">Xem
                                        thêm
                                        <i class="fa fa-angle-double-right"></i></a>

                                </div>

                            </div>


                            <div class="bestPlace">

                                <div class="blog-item">
                                    <a
                                        href="/location/14056-muong-thanh-luxury-can-tho-long-lay-giua-long-mien-tay-song-nuoc.html">
                                        <img class="img-responsive blog-img"
                                            src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/q361598415573.jpg"
                                            data-src="https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/q361598415573.jpg"
                                            alt="Mường Thanh Luxury Cần Thơ lộng lẫy giữa lòng miền Tây sông nước"
                                            title="Mường Thanh Luxury Cần Thơ lộng lẫy giữa lòng miền Tây sông nước"
                                            style="width:100%;"
                                            onerror="this.onerror=null;this.src='https://staticproxy.mytourcdn.com/480x360,q90/themes/images/pc-listing-default.png';">

                                        <h2 class="blog-name"> Mường Thanh Luxury Cần Thơ lộng lẫy giữa lòng miền ...
                                        </h2>
                                    </a>


                                    <a
                                        href="/location/14056-muong-thanh-luxury-can-tho-long-lay-giua-long-mien-tay-song-nuoc.html">Xem
                                        thêm <i class="fa fa-angle-double-right"></i></a>

                                </div>

                            </div>
                        </div>

                    </div>



                </div>
            </div>
    </div>
`

