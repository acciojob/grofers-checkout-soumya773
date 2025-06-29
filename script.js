function calculateTotal() {
      const prices = document.querySelectorAll(".prices");
      let total = 0;

      price.forEach(priceCell => {
        const value = parseFloat(priceCell.textContent);
        if (!isNaN(value)) {
          total += value;
        }
      });

      const table = document.getElementById("grocery-table");

      // Create new row
      const totalRow = document.createElement("tr");
      totalRow.classList.add("total");

      // Create one cell that spans both columns
      const totalCell = document.createElement("td");
      totalCell.setAttribute("colspan", "2");
      totalCell.textContent = "Total Price: ₹" + total;

      // Append cell to row and row to table
      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);
    }

    // Run the total calculation after page loads
    window.onload = calculateTotal;