window.onresize = function() {displayFunction()};

function displayFunction() {
  if (window.innerWidth < 992) {
    document.getElementById("first-navbar").style.top = "0";
  } else {
      document.getElementById("first-navbar").style.top = "-60px";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth >= 992) {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("first-navbar").style.top = "0";
      document.getElementById("nav-hide").style.display = "block";
    } else {
        document.getElementById("first-navbar").style.top = "-60px";
        document.getElementById("nav-hide").style.display = "none";
    }
  } else if (window.innerWidth < 992) {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("first-navbar").style.top = "0";
      document.getElementById("nav-hide").style.display = "block";
    } else {
        document.getElementById("first-navbar").style.top = "0";
        document.getElementById("nav-hide").style.display = "block";
    }
  }
}
