var arr=[];

let tableBody=document.querySelector("#tableBody")
document.querySelector("#Submit").addEventListener("click", function (event){
event.preventDefault();
 clicksubmit()} );

function clicksubmit() {
    console.log("Its working")
    let name=document.querySelector("#name").value;
    let empid=document.querySelector("#employeeID").value;
    let dept=document.querySelector("#department").value;
    let exp=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;

    let obj={
        id: ((Math.random().toString())*100),
        name,
        empid,
        dept,
        exp,
        email,
        mobile,
    }
    arr.push(obj)
    //console.log(arr)
// for(let k in obj){
//     console.log(obj[k])
// }
   handleAppendData()

}

function handleAppendData(){
tableBody.innerHTML=""

    arr.forEach(function(ele){
         // console.log(ele.name, ele.empid, ele.dept, ele.exp, ele.email, ele.mobile) 
                          // here the ele(can be any name)=element of array(arr) and ele.name=> dispay the valueof the key(name) from the above object(bj)
        let role="";

        let td1 =document.createElement("td")
        td1.innerText=ele.name
        let td2 =document.createElement("td")
        td2.innerText=ele.empid
        let td3 =document.createElement("td")
        td3.innerText=ele.dept
        let td4 =document.createElement("td")
        td4.innerText=ele.exp 
        if(ele.exp > 5){
            role="Senior"
        }
        else if(ele.exp>=2 && ele.exp<=5 ){
            role="Junior"
        }
        else if(ele.exp<=1){
            role="Fresher"
        }
        let td5 =document.createElement("td")
        td5.innerText=ele.email
        let td6 =document.createElement("td")
        td6.innerText=ele.mobile
        let td7 =document.createElement("td")
        td7.innerText=role
        let td8=document.createElement("td")
        let deleteBtn=document.createElement("button")
        deleteBtn.innerText="Delete"
        deleteBtn.addEventListener("click", function (){ handleDeleteclick(ele.id)})
        td8.append(deleteBtn)
    
        let tr=document.createElement("tr")
        tr.append(td1, td2, td3, td4, td5, td6,td7,td8)
        
        tableBody.append(tr)
       
    })
   
    
}

function handleDeleteclick(id){
    arr=arr.filter(function(ele){
        return ele.id !==id
    })
    handleAppendData()
}