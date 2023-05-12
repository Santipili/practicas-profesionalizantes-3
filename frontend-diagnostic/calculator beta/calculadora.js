let display = document.getElementById('result');

function showToDisplay(value) {
    
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '0';
}

function calculate() {
  let expression = display.innerHTML;
  let result = eval(expression);
  display.innerHTML = result;
}


var myDiv = document.getElementByClass("number");

myDiv.addEventListener("click", function() {
  myDiv.classList.toggle("clicked");
});









/* function deleteLast() {
  display.innerHTML = display.innerHTML.slice(0, -1);
} */ 




