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
                        <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
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
            <input id="search-input-hotel" class="search-input" type="text" placeholder="Nhập địa danh" name="place"/>
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-calendar"></i>
            <input  id="date-input1" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
              data-dd-theme="leaf" placeholder="Chọn ngày đi" name="departureDate" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-calendar"></i>
            <input  id="date-input2" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
              data-dd-theme="leaf" placeholder="Chọn ngày về" name="returnDate" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-hotel"></i> 
            <input class="search-input" type="text" placeholder="Nhập số phòng" name="roomNumber" />
          </div>
          <div class="btn-wrapper search-input">
            <button class="btn btn-primary" type="submit">Tìm khách sạn</button>
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
                    <span onClick="router.navigate('/register')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="router.navigate('/forgot')">
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
            <div onClick = "router.navigate('#')" class="logo-container cursor">
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
                            <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a id="itemLogin">Login</a></span>
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
                    <span onClick="router.navigate('/register')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="router.navigate('/forgot')">
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
            <div onClick = "router.navigate('#')" class="logo-container cursor">
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
                            <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a id="itemLogin">Login</a></span>
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
                            <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a  id="itemLogin">Login</a></span>
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
            <input style = "padding-left: 10px;" type="text" placeholder="Nhập địa danh" name="place">
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
                    <span onClick="router.navigate('/register')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="router.navigate('/forgot')">
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
                            <li onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a id="itemLogin">Login</a></span>
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
                            <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a  id="itemLogin">Login</a></span>
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
                    <span onClick="router.navigate('/register')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="router.navigate('/forgot')">
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
                            <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a id="itemLogin">Login</a></span>
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
                    <span onClick="router.navigate('/register')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="router.navigate('/forgot')">
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
                    <span class="error" id="forgot-email-error"></span>
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

`;


components.notFound =
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
                            <li id="clickRegister" onClick="router.navigate('/register')">Register</li>
                        </ul>
                    </div>
                    <span><a  id="itemLogin">Login</a></span>
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
                    <span onClick="router.navigate('/register')" >
                        Don't have an account? Register
                    </span>
                    <span onClick="router.navigate('/forgot')">
                        Forgot password
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
</div>


<img src="../img/img-tour/img-innerTour/img-no-data-found.jpg">

`
