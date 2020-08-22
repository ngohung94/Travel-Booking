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
components.travelGuide = `
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
                        <li>Hotline</li>
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
            <div class="tour-container">
                <div class="col-xs-12" import-html="breadcrumb">
                    <div class="breadcrumb-scroll">
                        <ul class="breadcrumb scroll" id="breadcrumb-scroll">
                            <li class="active"><a href="/location">Cẩm nang du lịch</a> </li>
                        </ul>
                    </div>
                </div>
                <div class="placeTravel">
                    <div class="group-filter">

                        <ul class="nav">
                            <li class="sub-menu">
                                <a href="#">Miền Bắc<span class="caret"></span></a>


                                <a href="#">Miền Trung<span class="caret"></span></a>

                                <a href="#">Miền Nam<span class="caret"></span></a>

                                <a href="#">Địa danh nổi bật<span class="caret"></span></a>

                                <a href="#">Bãi biển đẹp<span class="caret"></span></a>

                            </li>
                        </ul>


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
                        </div>
                    </div>
`