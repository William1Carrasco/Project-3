function valAtempt() {
var ans1=document.getElementById("mage").value;

  if (ans1 =  ) {
  document.getElementById("").innerHTML="";
  document.getElementById("").classList.add("");
  }
}
function valAtempt2() {
  var ans2=document.getElementById("mlvl").value;
  if (ans2 == "") {
  document.getElementById("").innerHTML="";
  document.getElementById("").classList.add("");
  }
}

function valAtempt3() {
  var ans3=document.getElementById("mprice").value;
  if (ans3 == "") {
  document.getElementById("").innerHTML="";
  document.getElementById("").classList.add("");
  }
}
function valroadAtempt() {
var ans1=document.getElementById("rage").value;

  if (ans1 =  ) {
  document.getElementById("").innerHTML="";
  document.getElementById("").classList.add("");
  }
}
function valroadAtempt2() {
  var ans2=document.getElementById("rlvl").value;
  if (ans2 == "") {
  document.getElementById("").innerHTML="";
  document.getElementById("").classList.add("");
  }
}

function valroadAtempt3() {
  var ans3=document.getElementById("rprice").value;
  if (ans3 == "") {
  document.getElementById("").innerHTML="";
  document.getElementById("").classList.add("");
  }
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
