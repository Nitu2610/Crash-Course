function isPalindrome(str){
    Str=str.split(" ");
  let revSentence=(Str.reverse())
  if(str==revSentence){
    console.log('true')
  }
}


const result = isPalindrome("A man, a plan, a canal, Panama");
// console.log(result);
// Output: true

