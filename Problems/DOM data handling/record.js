// fill in javascript code here

document.querySelector(".btn").addEventListener("click", submit_buttom);
let arr = [];
function submit_buttom(event) {
  event.preventDefault();

  let emp_name = document.querySelector("#name").value;
  let emp_Id = document.querySelector("#employeeID").value;
  let dept = document.querySelector("#department").value;
  let exp = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;

  let role = calRole(exp);
  let obj = {
    name: emp_name,
    Id: emp_Id,
    Department: dept,
    Experience: exp,
    email,
    Mobile: mobile,
    Role: role,
  };
  arr.push(obj);

  // console.log(arr);
  displayDetails();
}

function displayDetails() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  arr.forEach((obj, index) => {
    let row = document.createElement("tr");

    for (let key in obj) {
      let cell = document.createElement("td");
      cell.innerText = obj[key];
      row.appendChild(cell);
    }

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteRow(index);
    });
    let deleteCell = document.createElement("td");
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

   
    tbody.appendChild(row);
  });
}

function deleteRow(index) {
  arr.splice(index, 1);
  displayDetails(); 
}

function calRole(experience) {
  if (experience > 5) {
    return "Senior";
  } else if (experience >= 2 && experience <= 5) {
    return "Junior";
  } else {
    return "Fresher";
  }
}
