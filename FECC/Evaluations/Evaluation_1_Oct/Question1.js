function countVowelsAndConsonants(str){
let obj={
vowels:0,
consonants:0
};
str=str.toLowerCase().trim().split("");
let vowel='aeiou';
let alphabet='abcdefghijklmnopqrstuvwxyz';
let newWord=[];
for(i=0;i<alphabet.length;i++){
    for(j=0;j<str.length;j++){
        if(str[j]===alphabet[i]){
            newWord.push(str[j]);
            for(k=0;k<vowel.length;k++){
                if(str[j]===vowel[k]){
                    obj.vowels++;
                }
                else {
                    obj.consonants++;
                    
                } 
            }
        }
    }
}


// console.log(newWord);
return obj;
}


const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }

