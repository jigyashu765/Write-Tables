const getElement = (id) => document.getElementById(id);
const input = getElement("number");
const table = getElement("table");
const tabTitle = getElement("tabTitle");
const heading = getElement("heading");
const reversBtn = getElement("reversBtn");
const copyBtn = getElement("copyTableBtn");
const printBtn = getElement("printTableBtn");
const clearBtn = getElement("clearBtn");
const alertBox = getElement("alert");
const AlertTitle = getElement("AlertTitle");
const AlertMessage = getElement("AlertMessage");

// call on load

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateTable();
  } else if (event.key === "Delete") {
    clearAll();
  }
});

alertBox.style.display = "none";

// call on load

// Function call by other button function

function Alert(title, message) {
  alertBox.style.display = "block";
  AlertTitle.innerHTML = title;
  AlertMessage.innerHTML = message;
  setTimeout(function () {
    alertBox.style.display = "none";
  }, 2000);
}

function NotChange() {
  tabTitle.innerHTML = "Write Table";
  clearBtn.style.display = "none";
  copyBtn.style.display = "none";
  printBtn.style.display = "none";
  reversBtn.style.display = "none";
}

function BtnBlock() {
  reversBtn.style.display = "block";
  copyBtn.style.display = "block";
  printBtn.style.display = "block";
  clearBtn.style.display = "block";
}

// Function call by other button function

// Button click function

function generateTable() {
  const number = input.value;
  tabTitle.innerHTML = "Write Table of " + number;
  heading.innerHTML = "Table of " + number;
  table.innerHTML = "";

  if (number === "") {
    NotChange();
    heading.innerHTML = "Aray Number to Dalo...";
  } else if (number == 0) {
    NotChange();
    heading.innerHTML = "Aray 0 Ka Table M Sab Zero Hota Hai...";
  } else if (number <= 0) {
    NotChange();
    heading.innerHTML = "Minus M Table Kon Tera Baap Padhega...";
  } else {
    for (let i = 1; i <= 10; i++) {
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.innerHTML = number + " x " + i + " = " + i * number;
      BtnBlock();
    }
    Alert("Table of " + number, "Generated Successfully!");
  }
  input.focus();
}

function reverseBtn() {
  const number = input.value;
  table.innerHTML = "";
  for (let i = 10; i >= 1; i--) {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = number + " x " + i + " = " + i * number;
    BtnBlock();
  }
  Alert("Table of " + number, "Reverse Successfully!");
}

function copyTableBtn() {
  const number = input.value;
  let tableData = "";
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      const cell = row.cells[j];
      tableData += cell.textContent;
      tableData += "\t";
    }
    tableData += "\n";
  }
  navigator.clipboard.writeText(tableData);
  Alert("Table of " + number, "Copied Successfully!");
  input.focus();
}

function printTableBtn() {
  window.print();
}

function clearAll() {
  NotChange();
  input.value = "";
  heading.innerHTML = "";
  table.innerHTML = "";
  Alert("", "All Clear!");
  input.focus();
}

// Button click function
