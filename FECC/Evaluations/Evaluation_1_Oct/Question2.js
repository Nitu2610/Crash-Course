function reverseWords(str){
    str=str.trim().split(" "); //[ 'JavaScript', 'is', 'fun' ]
    let revWord="";

    for(i=0;i<str.length;i++){
        let rev="";
        let word=str[i];
        for(j=word.length-1;j>=0;j--){
            rev+=word[j]
        }
        revWord+=rev+" "
    }
  return(revWord)
}


const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

