const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  priceElements.forEach(price => {
    total += parseFloat(price.textContent);
};

getSumBtn.addEventListener("click", getSum);

