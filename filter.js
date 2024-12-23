var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var result = numbers.filter((currentItem, index, arr) => {
  return currentItem > 4;
});

console.log(result);
console.log(numbers); //it not changed orginal array.