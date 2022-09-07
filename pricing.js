// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("button1")
var btn2 = document.getElementById("button2")
var btn3 = document.getElementById("button3")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the pricing box or slider
const selectBox = document.getElementsByClassName("card");
let rangemy = document.getElementsByClassName('form-range')
// fuction to get the new range of slider
function showVal(newVal){
  
  document.getElementById("value").innerHTML=newVal; // Print the value of slider
  // highlight the pricing box acording to slider value
  if(newVal > 0 && newVal < 11)
  {
    selectBox[1].removeAttribute("style");
    selectBox[0].setAttribute('style', 'border:5px solid #007bff; background:white; opacity: 1.7; font-weight:bold; font-style: oblique;');
    selectBox[2].removeAttribute("style");
  }
  else if(newVal > 10 && newVal < 21)
  {
    selectBox[0].removeAttribute("style");
    selectBox[1].setAttribute('style', 'border:5px solid #007bff; background:white; opacity: 1.7; font-weight:bold; font-style: oblique;');
    selectBox[2].removeAttribute("style");
    
  }else
  {
    selectBox[0].removeAttribute("style");
    selectBox[1].removeAttribute("style");
    selectBox[2].setAttribute('style', 'border:5px solid #007bff; background:white; opacity: 1.7;font-weight:bold; font-style: oblique;');
  }
}
// get the form for validation
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add("was-validated");
});

