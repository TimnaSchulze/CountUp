//User Interface Logic

function hideResults() {
  document.getElementById("theMultiples").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();

  const biggerNumber = document.getElementById("biggerNumber").value;
  const smallerNumber = document.getElementById("smallerNumber").value;

  document.querySelector("span#biggerNumber").innerText = biggerNumber;
  document.querySelector("span#smallerNumber").innerText = smallerNumber;
  };

  document.querySelector("span#multiples").innerText = multiples;
};

//Business Logic

button.onclick = function() {
  const biggerNumber = document.getElementById("biggerNumber").value;
  const smallerNumber = document.getElementById("smallerNumber").value;

let multiples = [];
for (let index = smallerNumber; index <= biggerNumber; index += smallerNumber) {
  console.log(index);
  multiples.push(array[index]);
}
}