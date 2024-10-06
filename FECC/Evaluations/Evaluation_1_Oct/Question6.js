function rearrangeFruits(arr){
    let removedarr=arr.splice(-1,4);
    
    return removedarr;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));

