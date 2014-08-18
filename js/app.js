function main() {
  console.log("in main");
  $('#menu-opener').click(function() {
    console.log("menu button clicked");
    $('#menu').animate({
      left: '0px'
    }, 200);

    $('body').animate({
      left: '285px'
    }, 200);

    $('#menu-opener').hide();
  });
};

$(main);
