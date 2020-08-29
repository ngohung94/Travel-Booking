const components = {}
components.tourPage =
  `
<div class="header header-sticky">
    <div class="container-wrapper">
        <div class="header-bottom">
            <div onclick="view.setActiveScreen('hotelPage')" class="logo-container cursor">
                <div class="logo">
                    <img src="../img/img-hotel/logo.png">
                </div>
            </div>
            <div class="navigation-wrapper">
            <ul>
            <li onClick="view.setActiveScreen('hotelPage')"><a>Khách sạn</a></li>
            <li><a>Vé máy bay</a></li>
            <li onClick="view.setActiveScreen('tourPage')"><a>Tour</a></li>
            <li><a>Cẩm nang</a></li>
            <div class="login">
              <div class="logo-login icon-secondary">
                <i class="fa fa-sign-in"></i>
              </div>
              <div class="drop-downs-login">
                  <ul >
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
                </div
                >
            </form>
        </div>
    </div>
</div>
</div>
`

components.registerScreen =
  `
<div class="header header-sticky">
  <div class="container-wrapper">
      <div class="header-bottom">
          <div class="logo-container cursor" onClick="view.setActiveScreen('hotelPage')">
              <div >
                  <img src="../img/img-hotel/logo.png">
              </div>
          </div>
          <div class="navigation-wrapper">
              < <ul>
              <li onClick="view.setActiveScreen('hotelPage')"><a>Khách sạn</a></li>
              <li><a>Vé máy bay</a></li>
              <li onClick="view.setActiveScreen('tourPage')"><a>Tour</a></li>
              <li><a>Cẩm nang</a></li>
              <div class="login">
                <div class="logo-login icon-secondary">
                  <i class="fa fa-sign-in"></i>
                </div>
                <div class="drop-downs-login">
                    <ul >
                        <li id="clickLogin">Login</li>
                        <li>Register</li>
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
                            <div class="error" id="email-error"></div>
                        </div>
                        <div class="input-wrapper1">
                            <input type="password" placeholder="Password...." name="password">
                            <div class="error" id="password-error"></div>
                        </div>
                        <div class="input-wrapper1">
                            <input type="password" placeholder="Confirm password" name="confirmPassword">
                            <div class="error" id="confirm-password-error"></div>
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
          <div class="logo-container cursor"onClick="view.setActiveScreen('hotelPage')">
            <div class="logo" >
              <img src="../img/img-hotel/logo.png">
            </div>
          </div>
          <div class="navigation-wrapper">
            <ul>
              <li onClick="view.setActiveScreen('hotelPage')"><a>Khách sạn</a></li>
              <li><a>Vé máy bay</a></li>
              <li onClick="view.setActiveScreen('tourPage')"><a>Tour</a></li>
              <li><a>Cẩm nang</a></li>
              <div class="login">
                <div class="logo-login icon-secondary">
                  <i class="fa fa-sign-in"></i>
                </div>
                <div class="drop-downs-login">
                    <ul >
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
      <div class="header-content">
        <div class="heading">
          <h2>Make your vacation</h2>
          <h2>comfortable</h2>
        </div>
        <form class="form-wrapper">
          <div class="input-wrapper icon-primary">
            <i class="fa fa-map-marker"></i>
            <input type="text" placeholder="Nhập tên khách sạn" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-calendar"></i>
            <input id="date-input1" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
              data-dd-theme="leaf" placeholder="Chọn ngày đi" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-calendar"></i>
            <input id="date-input2" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
              data-dd-theme="leaf" placeholder="Chọn ngày về" />
          </div>
          <div class="input-wrapper icon-primary">
            <i class="fa fa-hotel"></i> <input type="text" placeholder="Nhập số phòng" />
          </div>
          <div class="btn-wrapper">
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
                        <div class="error" id="email-error"></div>
                    </div>
                    <div class="input-wrapper1">
                        <input type="password" placeholder="Password...." name="password">
                        <div class="error" id="password-error"></div>
                    </div>
                </div>
                <div class="form-action">
                    <span onClick="view.setActiveScreen('registerScreen')" >
                        Don't have an account? Register
                    </span>
                    <button class="btn1" type="submit">
                        Login
                    </button>
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
    <div class="logo-container">
      <div class="logo">
        <img src="../img/img-hotel/logo.png">
      </div>
    </div>
    <div class="navigation-wrapper">
      <ul>
        <li><a>Khách sạn</a></li>
        <li><a>Vé máy bay</a></li>
        <li><a>Tour</a></li>
        <li><a>Cẩm nang</a></li>
        <div class="login">
          <a href="#">
            <div class="logo-login icon-secondary">
              <i class="fa fa-sign-in"></i>
            </div>
            <span><a>Login</a></span>
          </a>
        </div>
      </ul>
    </div>
  </div>
  <div class="header-bottom-bottom">
    <!-- <div class="header-content"> -->
    <form class="form-wrapper">
      <div class="input-wrapper icon-primary">
        <i class="fa fa-map-marker"></i>
        <input type="text" placeholder="Nhập tên khách sạn" />
      </div>
      <div class="input-wrapper icon-primary">
        <i class="fa fa-calendar"></i>
        <input id="date-input1" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
          data-dd-theme="leaf" placeholder="Chọn ngày đi" />
      </div>
      <div class="input-wrapper icon-primary">
        <i class="fa fa-calendar"></i>
        <input id="date-input2" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
          data-dd-theme="leaf" placeholder="Chọn ngày về" />
      </div>
      <div class="input-wrapper icon-primary">
        <i class="fa fa-hotel"></i> <input type="text" placeholder="Nhập số phòng" />
      </div>
      <div class="btn-wrapper">
        <button class="btn btn-primary">Tìm khách sạn</button>
      </div>
    </form>
    <!-- </div> -->
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

`


// Page detail hotel
components.detailHotel = `
<div class="header header-sticky">
<div class="container-wrapper">
  <div class="header-bottom">
    <div class="logo-container">
      <div class="logo">
        <img src="../img/img-hotel/logo.png">
      </div>
    </div>
    <div class="navigation-wrapper">
      <ul>
        <li><a>Khách sạn</a></li>
        <li><a>Vé máy bay</a></li>
        <li><a>Tour</a></li>
        <li><a>Cẩm nang</a></li>
        <div class="login">
          <a href="#">
            <div class="logo-login icon-secondary">
              <i class="fa fa-sign-in"></i>
            </div>
            <span><a>Login</a></span>
          </a>
        </div>
      </ul>
    </div>
  </div>
  <div class="header-bottom-bottom">
    <!-- <div class="header-content"> -->
    <form class="form-wrapper">
      <div class="input-wrapper icon-primary">
        <i class="fa fa-map-marker"></i>
        <input type="text" placeholder="Nhập tên khách sạn" />
      </div>
      <div class="input-wrapper icon-primary">
        <i class="fa fa-calendar"></i>
        <input id="date-input1" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
          data-dd-theme="leaf" placeholder="Chọn ngày đi" />
      </div>
      <div class="input-wrapper icon-primary">
        <i class="fa fa-calendar"></i>
        <input id="date-input2" data-dd-large="true" data-dd-large-default="true" data-lock="from" type='text'
          data-dd-theme="leaf" placeholder="Chọn ngày về" />
      </div>
      <div class="input-wrapper icon-primary">
        <i class="fa fa-hotel"></i> <input type="text" placeholder="Nhập số phòng" />
      </div>
      <div class="btn-wrapper">
        <button class="btn btn-primary">Tìm khách sạn</button>
      </div>
    </form>
    <!-- </div> -->
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