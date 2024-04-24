

function toggleNav() {
  var sideNav = document.getElementById("mySidenav");
  var body = document.getElementsByTagName("body")[0];
  if (window.innerWidth >= 575) {
      sideNav.style.width = "450px";
  } else {
      sideNav.style.width = "320px";
      body.style.overflow = "hidden";
  }
}

function closeNav() {
  var sideNav = document.getElementById("mySidenav");
  var body = document.getElementsByTagName("body")[0];
  sideNav.style.width = "0";
  body.style.overflow = "auto"; 
}



