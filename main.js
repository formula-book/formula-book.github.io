if(window.innerWidth < 1000){
  document.getElementById("style").href="style_mobile.css";
}
function closeNav() {
  document.getElementById("nav").style.width = "0px";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
function openNav() {
  document.getElementById("nav").style.width = "250px";
  document.getElementById("navbar").style.display = "block";
  document.getElementById("navbar").style.position = "absolute";
  document.getElementById("navbar").style.zIndex = "100000000";
  document.getElementById("navbar").style.top = "0px";
  document.getElementById("navbar").style.left = "0px";
  document.getElementById("menu").style.display = "none";
}
function landscape(){
  if(window.matchMedia('(orientation: portrait)').matches){
    alert("We recommend landscape mode for better experience");
  }
}
function login(){
  document.getElementById("reg_log").href="login.html";
}
function register(){
  document.getElementById("reg_log").href="registeration.html";
}

