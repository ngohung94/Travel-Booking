var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router.on('/', function () {
    view.setActiveScreen("hotelPage");
})

router.on('/hotel', function () {
    view.setActiveScreen("hotelPage");
}).resolve();

router.on('/tour', function () {
    view.setActiveScreen("tourPage");
}).resolve();

router.on('/innerHotel',function(){
    view.setActiveScreen("innerHotelPage");
});


