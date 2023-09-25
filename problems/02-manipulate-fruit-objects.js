/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require("../fruit-data");

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/
//? Input : array , key , value
//? Output: array with each object that has the key value pair passed in

function addKeyAndValueToAll(array, key, value) {
  // console.log(array)
  for (let objects of array) {
    objects[key] = value;
  }
  return array;
}

// console.log(addKeyAndValueToAll(fruits, "inStock", true));

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/
//? input: array, key, value, index
//? Output: object at given index array with the key value pair added in

function addKeyAndValueToOne(array, key, value, index) {
  let newArr = array[index];
  newArr[key] = value;
  return newArr;
}

// console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"

/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/
//? Input: new key name
//? Output: return the resulting array with update key name

function updateKeyName(array, oldKey, newKey) {
  for (let objects of array) {
    objects[newKey] = objects[oldKey];
    delete objects[oldKey];
  }
  return array;
}

// console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"

/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/
//? Input: id values
//? Output: array of all new id values with six character strings

function updateIdValues(array) {
  let newArr = [];
  for (let objects of array) {
    let ids = objects.id;
    ids = "0000" + ids;
    newArr.push(ids);
  }
  return newArr;
}
// console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:

/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/
//? Input:

function deleteKeysAndValues(array, keyToDelete) {
  for (let objects of array) {
    let key = objects.nutritions;
    delete key[keyToDelete];
  }
  return array;
}
// console.log(deleteKeysAndValues(fruits, "sugar"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [
  addKeyAndValueToAll,
  addKeyAndValueToOne,
  updateKeyName,
  updateIdValues,
  deleteKeysAndValues,
];
