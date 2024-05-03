const character = "!";
      const count = 10;
      const container = document.getElementById("pyramid");

      function padRow(rowNumber, rowCount) {
        return (
          " ".repeat(rowCount - rowNumber) +
          character.repeat(2 * rowNumber - 1) +
          " ".repeat(rowCount - rowNumber)
        );
      }

      function generatePattern() {
        const rows = [];
        let inverted = false;

        for (let i = 1; i <= count; i++) {
          if (inverted) {
            rows.unshift(padRow(i, count));
          } else {
            rows.push(padRow(i, count));
          }
        }

        container.innerHTML = "";

        for (const row of rows) {
          const rowDiv = document.createElement("div"); // Create a div element
          rowDiv.textContent = row; // Set text content of the div to the current row
          container.appendChild(rowDiv); // Append the div to the container
        }
      }

      const generateBtn = document.getElementById("generate-btn");
      generateBtn.addEventListener("click", generatePattern);
