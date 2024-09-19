// Type Conversion- Explicit

function convertToNumber(value) {
  return Number(value);
}

function convertToString(value) {
  return value.toString();
}

function convertAndCompare(a, b) {
  const A = Number(a);
  const B = Number(b);
  console.log(typeof A, typeof B);
  return A === B;
}

// console.log(convertToNumber("563"));
// console.log(convertToString(574));
// console.log(convertAndCompare(6,"6"))

// Type Coercion- Implicit

function checkCoercion(a, b) {
  const looseEquality = a == b;
  const strictEquality = a === b;
  return {
    loose: looseEquality,
    strict: strictEquality,
  };
}

// console.log(checkCoercion(null,undefined))

function coerceInArithmetic(a, b) {
  a = Number(a);
  b = Number(b);

  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;
  return {
    add: add,
    subtract: sub,
    multiplication: mul,
    division: div,
  };
}

// console.log(coerceInArithmetic(2,"5"))

function coerceInConditionals(value) {
  return value ? "truthy" : "falsy";
}
// console.log(coerceInConditionals(null));

// Type Indentification

function identifyType(value){
    return typeof(value)
}
// console.log(identifyType(true));

function isArrayOrObject(value){
    return {
       isArray: Array.isArray(value),
       Type: typeof value}
}

// console.log(isArrayOrObject([1,2,3]))

function identifyComplexType(value){
   const result= {
        Type:typeof value,
       isObject:value instanceof Object,
        isArray: Array.isArray(value),
        elements:[]
    };
    if(result.isArray){
        for(const element of value){
            result.elements.push({
                type:typeof element,
                isObject: element instanceof Object,
                isArray: Array.isArray(element),
            });
        }
    }
    return result;
}
//  console.log(identifyComplexType([1,"2",true]))

// Statement Vs Expression

let a = 10, b = 5;// Statement

if (a > b) { // Statement (conditional)
   // console.log(a - b); //==>> a-b is expression but console.log(a-b) statement.
}
// Statements:Statements control the flow of the program and do not return values.
// Expressions evaluate to values and can be used within statements.

if(true){
    function expressionInFunction(a,b){
        return a+b;
    }
}

// console.log(expressionInFunction(1,5))

function complexExpression(a,b,c){
    if(a>=0 && b>=0 && c>=0){
        return{
            "(a+b)": a+b,
            "(c*b) ": c*b
        }
    }
}
//  console.log(complexExpression(1,5,6))


// For loop

for(i=1;i<=10;i++){
  //  console.log(i);
}

function printArrayElements(arr){
    for(i=0;i<arr.length;i++){
     //   console.log( arr[i])
    }
}
//  printArrayElements([1,5,9,6,3,2])

function createMultiplecationTable(n){
for(i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`)
}}

//  createMultiplecationTable(2)

function getDayOfWeek(dayNumber){
    switch (dayNumber){
        case  1: 
            console.log("Monday");
            break;
        
        case 2: 
            console.log("Tuesday");
            break;
        
        case 3: 
            console.log("Wednesday");
            break;
        
        case 4: 
            console.log("Thursday");
            break;
        
        case 5: 
            console.log("Friday");
            break;
        
        case 6: 
            console.log("Saturday");
            break;
        
        case 7: 
            console.log("Sunday");
            break;
        
        default :
            console.log("Invalid number")
        }
    }

    //  getDayOfWeek(1)

    function getDayOfWeek(dayNumber){
        switch (dayNumber){
            case  1: 
                console.log("Monday");
                break;
            
            case 2: 
                console.log("Tuesday");
                break;
            
            case 3: 
                console.log("Wednesday");
                break;
            
            case 4: 
                console.log("Thursday");
                break;
            
            case 5: 
                console.log("Friday");
                break;
            
            case 6:     
            case 7: 
                console.log("Weekend");
                break;
            
            default :
                console.log("Invalid number")
            }
        }
    
        //  getDayOfWeek(1)

        function classifyAnimal(animal){
            switch (animal){
                case "dog": 
                    console.log("mammal");
                    break;
    
                case "parrot": 
                    console.log("bird");
                    break;
                
                case "lizard": 
                    console.log("reptile");
                    break;
                
                default :
                    console.log("Invalid animal")
                }
            }
    //      classifyAnimal("dog")


// WHILE loop

let j=1;
while(j<=5){
   // console.log(j);
    j++;
}


function countDownFrom(n){
    while(n>=0){
        console.log(n);
        n--;
    }
}
//   countDownFrom(5)

function findFirstEven(numbers){
    let k=0;
    while(k<numbers.length){
        if(numbers[k]%2==0){
            console.log(numbers[k]);
            return;
        }
        k++;
    }
}

// findFirstEven([1,2,3])

// Do-WHile Loop




