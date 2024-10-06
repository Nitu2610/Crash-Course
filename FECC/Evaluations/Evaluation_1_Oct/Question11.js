function extractManagerDetails(company){
    let {departments}=company;
    for(let key in departments){
            let {key:{manager:{name,age,position, salary}}}= departments[key]
            console.log(name, age,position, salary)
        }
    
    // let Dept=departments;
    // let deptArr=Object.keys(Dept);
    // let result=[];
    // console.log( deptArr)
    // deptArr.forEach((ele)=>{
    //    console.log(ele)
    // })
    // console.log(result)
}


const company = {
    name: "Tech Solutions Inc.",
    departments: {
      engineering: {
        manager: {
          name: "John Doe",
          age: 35,
          position: "Engineering Manager",
          salary: 100000,
        },
        employees: [
          { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
          { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
        ],
      },
      sales: {
        manager: {
          name: "Jane Smith",
          age: 40,
          position: "Sales Manager",
          salary: 95000,
        },
        employees: [
          { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
          { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
        ],
      },
      marketing: {
        manager: {
          name: "Emily Johnson",
          age: 37,
          position: "Marketing Manager",
          salary: 90000,
        },
        employees: [
          { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
          { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
        ],
      },
    },
  };
  
  
console.log(extractManagerDetails(company));
// Output:
// [
//   { name: "John Doe", age: 35, position: "Engineering Manager", salary: 100000 },
//   { name: "Jane Smith", age: 40, position: "Sales Manager", salary: 95000 },
//   { name: "Emily Johnson", age: 37, position: "Marketing Manager", salary: 90000 }
// ]

//console.log(calculateAverageSalary(company));
// Output: 77777.78 (rounded to two decimal places)

//console.log(findHighestPaidEmployee(company));
// Output: { name: "John Doe", salary: 100000 }

