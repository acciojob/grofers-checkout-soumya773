const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  const resultDiv = document.getElementById("ans");
  resultDiv.textContent = total;