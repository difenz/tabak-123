let op; 

function func() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2 - 3000;
      break;
    case '-':
      result = num1 - num2;
      break;
  }

  document.getElementById("result").innerHTML = "Итого: " + result + " RUB";
}   


let container = document.getElementById("container")

let btn = document.getElementById("start");

btn.onclick = function() {
  container.style.display = "flex";
  btn.style.display = "none";
}