let innerData=[];

let displayData=document.querySelector("#display_inner_data");

let SubmitButton=document.querySelector("#btn-submit");
SubmitButton.addEventListener('click',saveUserData);

function saveUserData(e){
e.preventDefault();

let productName=document.querySelector("#product_title").value;
let productPrice=document.querySelector("#product_price").value;
let productRating=document.querySelector("#product_rating").value;


if (!productName || isNaN(productPrice) || isNaN(productRating)) {
    alert("Please enter valid product details.");
    return;
}

let productData={
    Title:productName,Price:productPrice,Rating:productRating
};
innerData.push(productData)

// console.log(productData)

productDataToDisplay(innerData)
}

function productDataToDisplay(arr){

}