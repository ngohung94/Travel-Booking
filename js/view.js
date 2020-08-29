const view = {};

const dataTripsVN = [
  {
    src: '../img/img-hotel/dalat.webp',
    alt: 'da lat',
    titleTrip: 'Đà Lạt',
    dataHotels: [
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
        titleHotel: 'Khách sạn Kings',
        rating: 4,
        location: '10 Bùi Thị Xuân, Phường 2, Đà Lạt, Lâm Đồng ',
        imgHotel: '../img/img-hotel/kings.webp',
        contentSummary: 'được thiết kế theo lối kiến trúc hiện đại, nội thất sang trọng, trang nhã và thoải mái, với tầm nhìn bao quát khung cảnh thành phố đây sẽ là sự lựa chọn thích hợp cho kỳ nghỉ của du khách khi đến với Đà Lạt. Tất cả các phòng đều có gắn máy lạnh.',
        priceOld: '700,000',
        priceNew: '400,000',
      }
    ]
  },
  {
    src: '../img/img-hotel/nhatrang.webp',
    alt: 'nha trang',
    titleTrip: 'Nha Trang',
    dataHotels: [
      {
        titleHotel: 'Khách sạn Nha Trang Palace Heritage',
        rating: 3,
        location: '2 Trần Phú, Phường 3, Đà Lạt, Lâm Đồng',
        imgHotel: '../img/img-hotel/vungtau.webp',
        contentSummary: "tọa lạc tại 12 Trần Phú một trong những con đường đẹp nhất thành phố Ngàn Hoa. Khách sạn này được các kiến trúc sư người Pháp thiết kế. Và xây dựng năm 1916, năm 1922 với tên gọi ...",
        priceOld: '5,000,000',
        priceNew: '1,000,000',
      },

    ]

  },
  {
    src: '../img/img-hotel/danang.jpg',
    alt: 'da lat',
    titleTrip: 'Đà Nẵng'
  },

  {
    src: '../img/img-tour/hạ long.jpg',
    alt: 'ha long',
    titleTrip: 'Hạ Long'
  },
  {
    src: '../img/img-tour/sapa.jpg',
    alt: 'sa pa',
    titleTrip: 'Sa Pa'
  },
  {
    src: '../img/img-tour/phan thiết.jpg',
    alt: 'phan thiet',
    titleTrip: 'Phan Thiết'
  },
  {
    src: '../img/img-tour/hà giang.jpg',
    alt: 'ha giang',
    titleTrip: 'Hà Giang'
  },
  {
    src: '../img/img-tour/phú quốc.jpg',
    alt: 'phu quoc',
    titleTrip: 'Phú Quốc'
  },
];

const dataTripsFR = [
  {
    src: '../img/img-tour/thái lan.jpg',
    alt: 'thai lan',
    titleTrip: 'Thái Lan'
  },
  {
    src: '../img/img-tour/singapor.jpg',
    alt: 'singapore',
    titleTrip: 'Singapore'
  },
  {
    src: '../img/img-tour/trung quốc.jpg',
    alt: 'trung quoc',
    titleTrip: 'Trung Quốc'
  },
  {
    src: '../img/img-tour/nhật bản.jpg',
    alt: 'nhat ban',
    titleTrip: 'Nhật Bản'
  },
  {
    src: '../img/img-tour/hồng kông.jpg',
    alt: 'hong kong',
    titleTrip: 'Hồng Kông'
  },
  {
    src: '../img/img-tour/campuchia.jpg',
    alt: 'campuchia',
    titleTrip: 'Campuchia'
  },
  {
    src: '../img/img-tour/phap.jpg',
    alt: 'phap',
    titleTrip: 'Pháp'
  },
  {
    src: '../img/img-tour/hàn quốc.jpg',
    alt: 'han quoc',
    titleTrip: 'Hàn Quốc'
  },
];

const dataDetailHotel = {
  dataHeaderTopContent: {
    titleContent: 'Swiss-Belresort Tuyen Lam Dalat',
    rating: 4,
    location: 'Phân khu chức năng 7.8, KDL Hồ Tuyền Lâm, Phường 3, Đà Lạt, Lâm Đồng',
  },
  dataImageOverView: {
    imageLeft: '../img/img-hotel/1.webp',
    imageRight: [
      '../img/img-hotel/2.webp',
      '../img/img-hotel/3.webp',
      '../img/img-hotel/6.webp',
      '../img/img-hotel/5.webp',
    ]
  },
  dataOneHotelReview: [
    {
      imgCover: '../img/img-hotel/zoom1.webp',
      nameHotel: 'Deluxe Twin Mountain View',
      area: 35,
      beds: 2,
      view: 'Hướng vườn',
      discount: 69,
      oldPrice: '1,000,000',
      newPrice: '500,000'
    },
    {
      imgCover: '../img/img-hotel/zoom1.webp',
      nameHotel: 'Deluxe Twin Mountain View',
      area: 35,
      beds: 2,
      view: 'Hướng vườn',
      discount: 69,
      oldPrice: '1,000,000',
      newPrice: '500,000'
    },
  ]
}

view.setActiveScreen = (screenName, idHotel, idDetailHotel) => {

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
      view.showAllHotels(dataTripsVN[idHotel].dataHotels);
      $('#date-input1').dateDropper();
      $('#date-input2').dateDropper();
      break;

    // Detail Hotel Page
    case 'detailHotelsPage':
      document.getElementById('app').innerHTML = components.detailHotel;
      // console.log(dataTripsVN[idHotel].dataHotels[idDetailHotel].dataDetailHotel)
      view.showDetailHotels();
      $('#date-input1').dateDropper();
      $('#date-input2').dateDropper();
      break;

    case 'tourPage':
      // in ra man trang chu
      document.getElementById('app').innerHTML = components.tourPage;
      document.getElementsByClassName("logo-container").addEventListener("click", () => {
        view.setActiveScreen('hotelPage');
      });
      break;
    case 'travelGuide':
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
      <div class="common-trip" onClick="view.setActiveScreen('innerHotelPage', ${id})">
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
    console.log(idx);
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
        <div class="btn btn-view-room" onClick="view.setActiveScreen('detailHotelsPage', ${idx})">
          XEM PHÒNG
        </div>
      </div>
    </div>

    `
    )
  })
}

view.showDetailHotels = () => {
  const headerTopContent = document.getElementById('header-top-content');
  const imageOverView = document.getElementById('image-overview');
  const oneHotelReview = document.getElementById('one-hotel-review');
  let rating = dataDetailHotel.dataHeaderTopContent.rating;
  let elementRating = document.createElement('span');
  elementRating.className = 'fa fa-star checked';
  let ratingWrapper = [];
  for (let i = 0; i < rating; i++) {
    ratingWrapper.push(elementRating);
  }

  headerTopContent.innerHTML = `
    <div class="title-content">
      <h2>${dataDetailHotel.dataHeaderTopContent.titleContent}</h2>

      <div class="star">
        ${ratingWrapper.map((ele) => ele.outerHTML).join('')}
      </div>
    </div>
    <div class="sub-location-content">
      <span><i class="fa fa-map-marker" aria-hidden="true"></i>
      </span>
      <h6>
        ${dataDetailHotel.dataHeaderTopContent.location}
      </h6>
    </div>
  `;

  imageOverView.innerHTML = `
  <div class="image-left">
    <img src="${dataDetailHotel.dataImageOverView.imageLeft}" alt="">
  </div>
  <div class="images-right">
    ${
    dataDetailHotel.dataImageOverView.imageRight.map(ele => {
      return (
        `<div class="one-image-right">
            <img src="${ele}" alt="">
          </div>`
      )
    })
    }
  </div>

  `

  oneHotelReview.innerHTML = dataDetailHotel.dataOneHotelReview.map((ele, idx) => {
    return (
      `
      <div class="info-one-hotel">
        <div class="info-left">
          <div class="image-cover">
            <img src="${ele.imgCover}" alt="">
          </div>
          <div class="info-hotel">
            <div class="name-hotel">
              <h3>${ele.nameHotel}</h3>
            </div>
            <div class="one-info-row row-first">
              <span><i class="fa fa-arrows-h" aria-hidden="true"></i>
              </span>
              <span>${ele.area} m<sup>2</sup></span>
            </div>
            <div class="one-info-row row-second">
              <span><i class="fa fa-eye" aria-hidden="true"></i>
              </span>
              <span>${ele.view}</span>
            </div>
            <div class="one-info-row row-third">
              <span><i class="fa fa-bed" aria-hidden="true"></i>
              </span>
              <span>${ele.beds} giường đơn</span>
            </div>
          </div>
    
          <div class="info-hotel">
            <div class="name-hotel">
              <h3>Tùy chọn</h3>
            </div>
            <div class="one-info-row row-first">
              <span><i class="fa fa-cutlery" aria-hidden="true"></i>
              </span>
              <span>Bao gồm bữa sáng</span>
            </div>
            <div class="one-info-row row-second">
              <span><i class="fa fa-check" aria-hidden="true"></i>
              </span>
              <span>Điều kiện hoàn hủy</span>
            </div>
          </div>
    
        </div>
        <div class="info-right">
          <div class="discount">
            Khuyến mãi đặc biệt - ${ele.discount}%
          </div>
          <div>
            <div class="old-price">
              <del>${ele.oldPrice} đ</del>
            </div>
            <div class="new-price">
              ${ele.newPrice} đ
            </div>
          </div>
          <div class="btn booking">
            Đặt ngay
          </div>
        </div>
      </div>
    
      `
    )
  })
}
