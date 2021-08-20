let arrayMembers = [
  {
    id: 1,
    name: "Dung",
    age: 20,
  },
  {
    id: 2,
    name: "Diu",
    age: 20,
  },
  {
    id: 3,
    name: "Ky",
    age: 20,
  },
  {
    id: 1,
    name: "Hai",
    age: 22,
  },
];

// var [ a, b , c , d] = arrayMembers;

// let members = [ ...new Set([a, b, c, d])]

// console.log(members);

// let filteredList = [
//     ...new Map(arrayMembers.map(obj => [`${obj.id}:${obj.name}`, obj]))
//     .values()
//   ];

//   console.log(filteredList)

let filterArrayMember = arrayMembers.reduce((a, c) => {
  !a.find((v) => v.id === c.id) && a.push(c);
  return a;
}, []);

console.log(filterArrayMember);
