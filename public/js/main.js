$('#flexslider.home').flexslider({
  animation: "slide",
  slideshowSpeed: 7000,
  pauseOnHover: false,
  start: function (slider) {
    $('#slideCta').bind('mouseover', function () {
        slider.pause();
      });
    $('#closeModal').bind('click', function () {
        slider.play();
      });
  }
});
$('#flexslider.interior').flexslider({
  animation: 'fade',
  directionNav: false
});
