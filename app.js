let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];
function getAverageAge(array) {
  const totalAge = array.reduce((sum, person) => sum + person.age, 0)
  return totalAge / array.length
}
console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
