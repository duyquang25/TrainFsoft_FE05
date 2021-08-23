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


let filterArrayMember = arrayMembers.reduce((a, b) => {
  !a.find((c) => c.id === b.id) && a.push(b);
  return a;
}, []);

console.log(filterArrayMember);



// Su dung Set
const set = new Set();

const filterArrayMember1 = arrayMembers.filter(member => {
  if(set.has(member.id)) 
    return 0;
  set.add(member.id);
  return 1;
})

console.log(filterArrayMember1)
