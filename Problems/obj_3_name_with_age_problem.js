function Name_Age(Name, Age) {
  let arr = [];
  for (let i = 0; i < Name.length; i++) {
    let name = Name[i];
    let age = Age[i];
    let obj = {
      name,
      age,
    };
    arr.push(obj);
  }
  console.log(arr);
  let list = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 30) {
      list += arr[i].name + " ";
    }
  }
  console.log(list);
}

Name_Age(
  ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],
  [32, 30, 26, 28, 44]
);
