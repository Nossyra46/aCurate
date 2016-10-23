$(document).on('ready', function() {
setTimeout(function () {
      $(".test").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 10
      });

      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });

      console.log("Executed");
    }, 1000);
    });