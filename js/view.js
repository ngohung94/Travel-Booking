const view = {};

const dataTripsVN = [
  {
    src: '../img/img-hotel/dalat.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/danang.jpg',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/nhatrang.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/dalat.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/danang.jpg',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/nhatrang.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
];

const dataTripsFR = [
  {
    src: '../img/img-hotel/dalat.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/danang.jpg',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/nhatrang.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/dalat.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/danang.jpg',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
  {
    src: '../img/img-hotel/nhatrang.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt'
  },
];

const dataHotels = [
  {
    titleHotel: 'Khách sạn Đà Lạt Palace Heritage',
    rating: 3,
    location: '2 Trần Phú, Phường 3, Đà Lạt, Lâm Đồng',
    imgHotel: '../img/img-hotel/vungtau.webp',
    contentSummary: "tọa lạc tại 12 Trần Phú một trong những con đường đẹp nhất thành phố Ngàn Hoa. Khách sạn này được các kiến trúc sư người Pháp thiết kế. Và xây dựng năm 1916, năm 1922 với tên gọi ...",
    priceOld: '5,000,000',
    priceNew: '1,000,000',
  },
  {
    titleHotel: 'Khách sạn Đà Lạt Palace Heritage',
    rating: 5,
    location: '2 Trần Phú, Phường 3, Đà Lạt, Lâm Đồng',
    imgHotel: '../img/img-hotel/vungtau.webp',
    contentSummary: "tọa lạc tại 12 Trần Phú một trong những con đường đẹp nhất thành phố Ngàn Hoa. Khách sạn này được các kiến trúc sư người Pháp thiết kế. Và xây dựng năm 1916, năm 1922 với tên gọi ...",
    priceOld: '5,000,000',
    priceNew: '1,000,000',
  },
];

view.setActiveScreen = (screenName) => {

  switch (screenName) {
    // Hotel Page
    case 'hotelPage':
      document.getElementById('app').innerHTML = components.hotelPage;
      view.showTripsVN(dataTripsVN);
      view.showTripsFR(dataTripsFR);
      $('#date-input1').dateDropper();
      $('#date-input2').dateDropper();
      const clickLogin = document.getElementById('clickLogin')
        clickLogin.addEventListener('click', () => {
          document.getElementById('login').style = 'display:block'
        })
        const closeLogin = document.getElementById('closeLogin')
        closeLogin.addEventListener('click', () => {
          document.getElementById('login').style = 'display:none'
        })
        
      // Login
      const loginForm = document.getElementById('login-form')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        loginForm.email.value = loginForm.email.value.trim()
        const dataLogin = {
          email: loginForm.email.value,
          password: loginForm.password.value
        }
        controller.login(dataLogin)
      })
      break;

    // Inner Hotel Page
    case 'innerHotelPage':
      document.getElementById('app').innerHTML = components.innerHotel;
      view.showAllHotels(dataHotels);
      $('#date-input1').dateDropper();
      $('#date-input2').dateDropper();
      break;
    case 'tourPage':
      // in ra man trang chu
      document.getElementById('app').innerHTML = components.tourPage

      break;
      case 'travelGuide' :
        document.getElementById('app').innerHTML = components.travelGuide
      break;
    case 'registerScreen':
      document.getElementById('app').innerHTML = components.registerScreen
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value
        }
        controller.register(dataRegister)
      })
      
      break;
  }
  
}

view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}
view.addLogOut = () => {
  const logOut = document.createElement('li')
  logOut.id = "logOut"
  logOut.innerText = `Log Out`
  document.querySelector('.drop-downs-login').appendChild(logOut)
  document.getElementById("logOut").addEventListener("click", (e) => {
    e.preventDefault()
    firebase.auth().signOut().then(() => {
      alert("Sign-out successful.")
    })
  })
  document.getElementById('clickLogin').style = "display : none"
  document.getElementById('clickRegister').style = "display : none"
}

// Show common trips Viet Nam
view.showTripsVN = (dataTripsVN) => {
  const commonTripsVietnam = document.getElementById('common-trips-vietnam');
  commonTripsVietnam.innerHTML = dataTripsVN.map((ele, id) => {
    return (
      `
      <div class="common-trip" onClick="view.setActiveScreen('innerHotelPage')">
        <div class="img-trip">
          <img src="${ele.src}" alt="${ele.alt}">
      </div>
        <div class="info-detail">
          Chi tiết
      </div>
        <div class="info-trip">
          <h5 class="title-trip">${ele.titleTrip}</h5>
        </div>
      </div>
      `
    )
  })

}

view.showTripsFR = (dataTripsFR) => {
  const commonTripsForeign = document.getElementById('common-trips-foreign');
  commonTripsForeign.innerHTML = dataTripsFR.map((ele, id) => {
    return (
      `
      <div class="common-trip" onClick="view.setActiveScreen('innerHotelPage')">
        <div class="img-trip">
          <img src="${ele.src}" alt="${ele.alt}">
      </div>
        <div class="info-detail">
          Chi tiết
      </div>
        <div class="info-trip">
          <h5 class="title-trip">${ele.titleTrip}</h5>
        </div>
      </div>
      `
    )
  })
}

// Show all hotels
view.showAllHotels = (dataHotels) => {
  const rightMainContent = document.getElementById('right-main-content');

  rightMainContent.innerHTML = dataHotels.map((ele, idx) => {
    let rating = ele.rating;
    let elementRating = document.createElement('span');
    elementRating.className = 'fa fa-star checked';
    let ratingWrapper = [];
    for (let i = 0; i < rating; i++) {
      ratingWrapper.push(elementRating);
    }

    return (
      `
    <div class="one-hotel">
      <h2 class="title-hotel">${ele.titleHotel} ${ratingWrapper.map((ele) => ele.outerHTML).join('')}</h2>
      <div class="location">
        <span><i class="fa fa-map-marker" aria-hidden="true"></i>
        </span>
        <h6 class="subtitle1">${ele.location}</h6>
        <span>(Xem bản đồ)</span>
      </div>
      <div class="info-hotel">
        <div class="img-hotel">
          <img src="${ele.imgHotel}" alt="phan thiet">
        </div>
        <div class="info-extra-hotel">
          <p><span>${ele.titleHotel}</span> ${ele.contentSummary}</p>
          <div class="guarantee">
            <span><i class="fa fa-check-circle" aria-hidden="true"></i>
            </span>
            <span>Đảm bảo hoàn tiền</span>
          </div>
          <div class="guarantee">
            <span><i class="fa fa-check-circle" aria-hidden="true"></i>
            </span>
            <span>Đảm bảo giá tốt nhất</span>
          </div>
        </div>
      </div>
      <div class="info-hot">
        <div class="discount">
          Giảm giá 43%
        </div>
        <div class="price">
          <div class="price-old"><del>${ele.priceOld}</del></div>
          <div class="price-new">${ele.priceNew}</div>
        </div>
        <div class="btn btn-view-room">
          XEM PHÒNG
        </div>
      </div>
    </div>

    `
    )
  })
}