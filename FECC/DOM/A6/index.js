let innerData = [{
    Name: "John Doe",
    Email: "john.doe@example.com",
    Password: "john1234"
  },
  {
    Name: "Jane Smith",
    Email: "jane.smith@example.com",
    Password: "jane5678"
  },
  {
    Name: "Alice Johnson",
    Email: "alice.johnson@example.com",
    Password: "alice9876"
  },
  {
    Name: "Bob Brown",
    Email: "bob.brown@example.com",
    Password: "bob4321"
  },
  {
    Name: "Charlie Davis",
    Email: "charlie.davis@example.com",
    Password: "charlie6543"
  }
];

let Submit_btn = document.querySelector("#btn_submit");
Submit_btn.addEventListener("click", saveUserData);

function saveUserData(e) {
  e.preventDefault();
  let obj = {};

  let username = document.querySelector("#username");
  obj.Name = username.value;
  username.value = "";

  let useremail = document.querySelector("#useremail");
  obj.Email = useremail.value;
  useremail.value = "";

  let userpassword = document.querySelector("#userpassword");
  obj.Password = userpassword.value;
  userpassword.value = "";

  innerData.push(obj);
  // console.log(obj)

  displaySavedData(innerData);
}

function displaySavedData(arr) {
  let displayBox = document.querySelector("#user_data_displayed");
  displayBox.innerHTML = "";

  arr.forEach((item,index) => {
    let { Name, Email, Password } = item;

    let card = document.createElement("div");
    card.classList.add("usercard");

    let userNo=document.createElement('p');
    userNo.innerHTML=`<strong> User Id:- ${index+1}</strong> `

    let userName = document.createElement("p");
    userName.classList.add("userHeading");
    userName.innerHTML = `<strong>Name:- </strong> ${Name}`;

    let userEmail = document.createElement("p");
    userEmail.classList.add("userHeading");
    userEmail.innerHTML = `<strong>Email:- </strong> ${Email}`;

    let userPassword = document.createElement("p");
    userPassword.classList.add("userHeading");
    userPassword.innerHTML = `<strong>Password:- </strong> ${Password}`;

    card.append(userNo,userName, userEmail, userPassword);
    displayBox.appendChild(card);
  });
}



displaySavedData(innerData)