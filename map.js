var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.map((num) => {
  return num * 2;
});

console.log(result);
console.log(numbers); //it not changed orginal array.