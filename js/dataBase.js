
const dataTourVN = [
    {
      title: 'Bình Ba,Quốc Đảo Tôm Hùm',
      scr: '../img/img-tour/img-innerTour/Tour Nha Trang/bình ba, đảo tôm hùm.jpg',
      alt: 'Not Found',
      dayStart: 'Hàng ngày',
      timeTour: '1 ngày 0 đêm',
      addressStart: 'Khánh Hoà',
      vehicle: 'ô tô, máy bay',
      price: '280,000đ',
    },
    {
      title: 'Thiên Đường Maldives Bình Lập',
      scr: '../img/img-tour/img-innerTour/Tour Nha Trang/tour thiên đường Maldives.jpg',
      alt: 'Not Found',
      dayStart: 'Hàng ngày',
      timeTour: '1 ngày 0 đêm',
      addressStart: 'Khánh Hoà',
      vehicle: 'ô tô',
      price: '680,000đ',
    },
    {
      title: 'Du Lịch Cù Lao Chàm',
      scr: '../img/img-tour/img-innerTour/Tour đà Nẵng/tour-du-lich-cu-lao-cham-trong-1-ngay-dl3.jpg',
      alt: 'Not Found',
      dayStart: 'Hàng ngày',
      timeTour: '1 ngày 0 đêm',
      addressStart: 'Đà Nẵng',
      vehicle: 'ô tô, tàu biển',
      price: '680,000đ',
    },
    {
      title: 'Du Lịch Hà Nội - Sapa - Hạ Long - Ninh Bình',
      scr: '../img/img-tour/img-innerTour/Tour Hà Nội/tour-du-lich-ha-noi-sapa-ha-long-ninh-binh-6-ngay-5-dem.jpg',
      alt: 'Not Found',
      dayStart: 'Hàng ngày',
      timeTour: '6 ngày 5 đêm',
      addressStart: 'Hà Nội',
      vehicle: 'ô tô, tàu biển',
      price: '7,000,000đ',
    }
  ];



  
  /////////////////////////////////// phan code data trip cua anh Tung
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
  
  