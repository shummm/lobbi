function openNavbar() {

  let checkButtonNav = document.getElementById('site-nav__check-menu');

  if ( checkButtonNav.checked ) {
    document.getElementById("page-header__middle").style.marginTop = "150px";
  } else {
    document.getElementById("page-header__middle").style.marginTop = "0px";
  }
}