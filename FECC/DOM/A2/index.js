let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

let container = document.createElement("div");
container.className = "cardsContainer";

function displaySavedData(arr) {
    container.innerHTML = "";
  arr.forEach((ele) => {
    let { name, username, email } = ele;
    container.append(createCard(name, username, email));
  });
}

displaySavedData(user);

let outerLayerOfInputBox = document.querySelector("#input_box");
outerLayerOfInputBox.append(container);

function createCard(name, username, email) {
  let cardBox = document.createElement("div");
  cardBox.className = "cardBox";

  let Name = document.createElement("p");
  Name.className = "heading";
  Name.innerText = `Name: ${name}`;

  let Username = document.createElement("p");
  Username.className = "heading";
  Username.innerText = `Username: ${username}`;

  let Email = document.createElement("p");
  Email.className = "heading";
  Email.innerText = `Email Id: ${email}`;

  cardBox.append(Name, Username, Email);

  return cardBox;
}


let submit_btn=document.querySelector("#btn_submit");
submit_btn.addEventListener('click',(function UserInputData(e){
    e.preventDefault();
    let User__Name=document.querySelector('#name').value;
    let User__UserName=document.querySelector('#username').value;
    let User__EmailId=document.querySelector('#email').value

    let obj={
        name:User__Name,
        username:User__UserName,
        email:User__EmailId,
    };
    
    user.push(obj);
    displaySavedData(user);
}))