const view = {};

view.setActiveScreen = (screenName) => {

  switch (screenName) {
    // Hotel Page
    case 'hotelPage':
      document.getElementById('app').innerHTML = components.hotelPage;
      view.showTripsVN(dataTripsVN);
      view.showTripsFR(dataTripsFR);
      $('#date-input1').dateDropper();
      $('#date-input2').dateDropper();
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
      document.getElementById('app').innerHTML = components.tourPage;
      view.showTourVN(dataTripsVN);
      view.showTourFR(dataTripsFR);
      break;
    case 'innerTourTrips':
      document.getElementById('app').innerHTML = components.innerTourTrips;
      view.showTourTrips(dataTourVN);
      break;

    case 'travelGuide':
      document.getElementById('app').innerHTML = components.travelGuide;
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
    case 'forgotPassword':
      document.getElementById('app').innerHTML = components.forgotPassword
      const forgotPass = document.getElementById('forgotPass')
      forgotPass.addEventListener('submit', (e) => {
        e.preventDefault()
        const emailAddress = forgotPass.email.value;
        controller.forgotPassword(emailAddress)
        firebase.auth().sendPasswordResetEmail(emailAddress).then(function () {
          alert('Please access the password reset email')
        })
      })
      break;
  }
  document.getElementById('clickLogin').addEventListener('click', () => {
    document.getElementById('login').style.display = 'block'
  })
  document.getElementById('closeLogin').addEventListener('click', () => {
    document.getElementById('login').style.display = 'none'
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
}



view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}

// Show common trips Viet Nam
view.showTripsVN = (dataTripsVN) => {
  const commonTripsVietnam = document.getElementById('common-trips-vietnam');
  let html = "";
  for (let i = 0; i < dataTripsVN.length; i++) {
    html += `
          <div class="common-trip" onClick="view.setActiveScreen('innerHotelPage')">
            <div class="img-trip">
              <img src="${dataTripsVN[i].src}" alt="${dataTripsVN[i].alt}">
          </div>
            <div class="info-detail">
              Chi tiết
          </div>
            <div class="info-trip">
              <h5 class="title-trip">${dataTripsVN[i].titleTrip}</h5>
            </div>
          </div>
          `;
  }
  commonTripsVietnam.innerHTML = html;

}

view.showTripsFR = (dataTripsFR) => {
  const commonTripsForeign = document.getElementById('common-trips-foreign');
  let html = "";
  for (let i = 0; i < dataTripsFR.length; i++) {
    html += `
        <div class="common-trip" onClick="view.setActiveScreen('innerHotelPage')">
          <div class="img-trip">
            <img src="${dataTripsFR[i].src}" alt="${dataTripsFR[i].alt}">
        </div>
          <div class="info-detail">
            Chi tiết
        </div>
          <div class="info-trip">
            <h5 class="title-trip">${dataTripsFR[i].titleTrip}</h5>
          </div>
        </div>
    `;
  }
  commonTripsForeign.innerHTML = html;
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

//////////////// phần tour
view.showTourVN = (dataTripsVN) => {
  const commonToursVietnam = document.getElementById("common-tour");
  let html = "";
  for (let i = 0; i < dataTripsVN.length; i++) {
    html += `
        <li style = "max-width:100%;" class="box-thumbnails">
          <div class="item-thumbnail">
            <a onClick="view.setActiveScreen('innerTourTrips')" >
                <img style = "width:100%;height:100%;"  class="img-responsive cursor" src="${dataTripsVN[i].src}" alt="${dataTripsVN[[i]].alt}">
                <h3 class="item-name">
                    <strong class="text-df">${dataTripsVN[i].titleTrip}</strong>
                </h3>
            </a>
          </div>
        </li>
    `;
  }
  commonToursVietnam.innerHTML = html;
}

view.showTourFR = (dataTripsFR) => {
  const commonToursForeign = document.getElementById("foreign-tour");
  let html = "";
  for (let i = 0; i < dataTripsFR.length; i++) {
    html += `
        <li style = "max-width:100%;" class="box-thumbnails">
          <div class="item-thumbnail">
            <a href="#" >
                <img style = "width:100%;height:100%;" class="img-responsive" src="${dataTripsFR[i].src}" alt="${dataTripsFR[[i]].alt}">
                <h3 class="item-name">
                    <strong class="text-df">${dataTripsFR[i].titleTrip}</strong>
                </h3>
            </a>
          </div>
        </li>
    `;
  }
  commonToursForeign.innerHTML = html;
}

// view.showTourTrips = (dataTourVN) => {
//   const NameTourVN = document.getElementById("list-tour-available-show");
//   let html = "";
//   for (let i = 0; i, dataTourVN.length; i++) {
//     if(dataTourVN[i].)
//   }
// }