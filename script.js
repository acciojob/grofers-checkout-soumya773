const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    const val = parseFloat(cell.textContent) || 0;
    total += val;
  });

  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.setAttribute("id", "ans"); // So Cypress can find it
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

};

getSumBtn.addEventListener("click", getSum);

