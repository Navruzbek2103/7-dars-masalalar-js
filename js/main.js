let elHeading = document.createElement("h3");
let elBody = document.querySelector("body")
let elContainer = document.createElement("div")

elBody.appendChild(elContainer);
let numbers = [3.02, -3.65, 5, -9, -12, 23, -2343, 32, -232];
let numbersString = numbers.join(", ")
elHeading.innerHTML = "Massivdagi mavjud elementlar: " + numbersString

elContainer.appendChild(elHeading)
elContainer.style.maxWidth = "350px"
elContainer.style.width = "100%"
elContainer.style.margin = "20px auto"
elContainer.style.fontStyle = "italic"
elContainer.style.fontSize = "20px"
elContainer.style.textAlign = "center"

let elResult;
for (let i = 0; i < numbers.length; i++) {
  let res2 = Math.round(Math.abs(numbers[i]));

  elResult = document.createElement("h2");
  elContainer.appendChild(elResult);

  elResult.style.display = "inline"
  elResult.style.padding = "20px"

  elResult.innerHTML = res2
}