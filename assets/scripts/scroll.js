window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("first-navbar").style.top = "0";
    document.getElementById("nav-hide").style.display = "block";
  } else {
    document.getElementById("first-navbar").style.top = "-60px";
    document.getElementById("nav-hide").style.display = "none";
  }
}
