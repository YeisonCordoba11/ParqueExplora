const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 23,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 22,
      course: "Accounting",
    },
    {
      name: "Ryan",
      lastname: "Ray",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 21,
      course: "Financial Management",
    },
];

//const sortedStudents = students.sort(function(first, second){
//  if (first.age < seconde.age){
//     return 1 
//    }else {
//       return -1
//    }
//})

//REFACTORIZACION DEL CODIGO ANTERIOR
const sortedStudents = students.sort((a,b) => a.age < b.age  ? 1: -1)

console.log(sortedStudents)