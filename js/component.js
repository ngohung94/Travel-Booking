const components = {}
components.homePageScreen = 
`
<div class="tour-container">
    <header>
        <div class="header-container">
            <div id="logo">bookingtravel.vn</div>
            <ul class="header-chosen">
                <li>Khách sạn</li>
                <li>Vé máy bay</li>
                <li>Ưu đãi</li>
                <li>Tour</li>
                <li>Cẩm nang du lịch</li>
            </ul>
            <ul class="icons-notification">
                <li>Hotline</li>
                <li><i class="far fa-comments"></i></li>
                <li><i class="far fa-bell"></i></li>
                <li id="clickLogin"><i class="far fa-user"></i></li>
            </ul>
        </div>
    </header>
    <div class="tour-img">
        <div class="aside-mid">
            <form id="tour-search">
                <div id="tour-search-content">Bạn muốn đi du lịch ở đâu?</div>
                <input type="text" placeholder="Nhập địa danh">
                <div id="tour-search-submit">
                    <button  class="btn cursor" type="submit">tìm Tour</button>
                </div>
            </form>
        </div>
    </div>
</div>

// login
<div id="login" class="modal">
<div class="modal-content">
    <div id="loginModal">
        <div class="modal-header">
            <h4 class="modal-title">LOGIN</h4>              
            <span id="close" class="close">x</span>
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