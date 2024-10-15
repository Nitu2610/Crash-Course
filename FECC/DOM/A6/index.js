let SubmitBtn= document.querySelector("#btn_submit");

SubmitBtn.addEventListener('click', SaveUserData);

let savedData=[{
    name:"Nitesh",
    email:"nitesh@gmail.com",
    password:"Nitesh@123"
}];

function SaveUserData(e){
    e.preventDefault();

    let obj={};

    let UserName=document.querySelector("#name");
    obj.name=UserName.value;

    let UserEmail=document.querySelector("#email");
    obj.email=UserEmail.value;

    let UserPassword=document.querySelector("#password");
    obj.password=UserPassword.value;

    savedData.push(obj);

 //   console.log(savedData)
}

