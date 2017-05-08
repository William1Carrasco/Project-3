function testAtempt1() {
var ans1=document.getElementById("atempt1").value;
  if (isNaN(ans1) == true) {
    alert("Your atempt must be a number.");
  }
  if (ans1 == "2512611") {
  document.getElementById("atempt1Group").innerHTML="Correct";
  document.getElementById("atempt1Group").classList.add("has-success");
  } else {
  document.getElementById("atempt1Group").innerHTML="Incorrect";
  document.getElementById("atempt1Group").classList.add("has-error");
  document.getElementById("atempt1Error").classList.remove("hidden-message");
  document.getElementById("atempt1Error").classList.add("shown-message");
  }
}
function testAtempt2() {
  var ans2=document.getElementById("atempt2").value;
  if (isNaN(ans2) == true) {
  alert("Your atempt must be a number.");
  }
  if (ans2 == "1261125") {
  document.getElementById("atempt2Group").innerHTML="Correct";
  document.getElementById("atempt2Group").classList.add("has-success");
  } else {
  document.getElementById("atempt2Group").innerHTML="Incorrect";
  document.getElementById("atempt2Group").classList.add("has-error");
  document.getElementById("atempt2Error").classList.remove("hidden-message");
  document.getElementById("atempt2Error").classList.add("shown-message");
  }
}

function testAtempt3() {
  var ans3=document.getElementById("atempt3").value;
  if (isNaN(ans3) == true) {
  alert("Your atempt must be a number.");
  }
  if (ans3 == "61222003211126") {
  document.getElementById("atempt3Group").innerHTML="Correct";
  document.getElementById("atempt3Group").classList.add("has-success");
  } else {
  document.getElementById("atempt3Group").innerHTML="Incorrect";
  document.getElementById("atempt3Group").classList.add("has-error");
  document.getElementById("atempt3Error").classList.remove("hidden-message");
  document.getElementById("atempt3Error").classList.add("shown-message");
  }
}
var numCorrect=0;
function storeAtempt() {
  var ans1=document.getElementById("atempt1").value;
  var ans2=document.getElementById("atempt2").value;
  var ans3=document.getElementById("atempt3").value;
  if (ans1= true){
    numCorrect=numCorrect+1;
  } else if (ans1=false && ans2=true) {
    numCorrect=numCorrect+1;
  } else if (!ans1 && !ans2 && ans3) {
    numCorrect=numCorrect+1;
  }
  setCookie("totalCorrect",numCorrect,1);
}
