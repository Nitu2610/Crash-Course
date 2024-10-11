let FetchData = document
  .querySelector("#btn_fetch")
  .addEventListener("click", () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let data = result.data;
        gotResult(data);
      })
      .catch((error) => {
        console.log("there is an error in api link");
      });
  });
  
function gotResult(arr) {
    const userContainer = document.querySelector("#userCard");

  arr.forEach((ele) => {
    let { avatar, email, first_name, last_name } = ele;

    let userCards=CardDetails(avatar, email, first_name, last_name);
   
    userCard.appendChild(userCards);
  });
}


function CardDetails(avatar, email, first_name, last_name){
    let userDetailsInCard = document.createElement("div");
    userDetailsInCard.classList.add("userDetailsInCard");

    let Name = document.createElement("p");
    Name.classList.add("heading");
    Name.innerText = `${first_name} ${last_name}`;

    let emailId = document.createElement("p");
    emailId.classList.add("heading");
    emailId.innerText = ` ${email}`;

    let pic = document.createElement("img");
    pic.classList.add("image");
    pic.src = avatar;

    userDetailsInCard.append(pic,Name, emailId);
    return userDetailsInCard;
}
/*
avatar: "https://reqres.in/img/faces/2-image.jpg"
​
email: "janet.weaver@reqres.in"
​
first_name: "Janet"
​
id: 2
​
last_name: "Weaver" 
*/
