$(document).on('ready', function() {
setTimeout(function () {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3
      });

      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 3
      });

      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });

      console.log("Executed");
    }, 500);
    });