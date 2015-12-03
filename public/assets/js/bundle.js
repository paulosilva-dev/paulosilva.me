var getAge = function (d, m, y) {
    var bd = new Date();
    bd.setFullYear(y, m, d);
    bd = bd.getTime();
    // 1000ms*60s*60m*24h*365.25y
    // 31557600000 ms per year
    return Math.floor((Date.now() - bd)/31557600000);
  };

// main function
// executed on document ready
var main = function () {
  // set my current age
  $('.my-age').text(getAge(25, 9, 1985));
};

$(document).ready(main);
