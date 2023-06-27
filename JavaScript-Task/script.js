//1. Prime Number
const number = 7;
const isNumberPrime = isPrime(number);

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isNumberPrime);

//2. Factorial
function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));

// 3. reverse
const text = "Hello World";
const reversedText = reverseText(text);
function reverseText(text) {
  const words = text.split(" ");
  const reversedWords = words.reverse();
  const reversedText = reversedWords.join(" ");
  return reversedText;
}
console.log(reversedText);

//4. sum of Array
var numbers = [1, 2, 3, 4, 5];
var sum = sumArray(numbers);

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sum);

// 5.Largest Sum
const arr = [1, 2, 3, 4, 5];
const largestSum = findLargestSum(arr);

function findLargestSum(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two numbers";
  }

  let largestSum = arr[0] + arr[1];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }

  return largestSum;
}
console.log(largestSum);

//6. valid URL
const url = "https://www.example.com";
const isValid = isValidURL(url);

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
console.log(isValid);

// 7.array of object
const data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
const sortedData = sortObjectsByProperty(data, "age");
[
  { name: "Alice", age: 25 },
  { name: "John", age: 30 },
  { name: "Bob", age: 35 },
];
function sortObjectsByProperty(data, property) {
  return data.sort((a, b) => a[property] - b[property]);
}
console.log(sortedData);

// 8. calculate the sum of digit
const numb = 12345;
const sum1 = sumOfDigits(numb);

function sumOfDigits(number) {
  while (number > 9) {
    let sum1 = 0;
    while (number > 0) {
      sum1 += number % 10;
      number = Math.floor(number / 10);
    }
    number = sum1;
  }
  return number;
}
console.log(sum1);

// 9.stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.peek();
console.log(stack.items);

// 10.Median function
const numberss = [5, 2, 9, 1, 7];
const median = findMedian(numberss);

function findMedian(numbers) {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const length = sortedNumbers.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If the array length is even, average the middle two numbers
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    // If the array length is odd, return the middle number
    return sortedNumbers[middleIndex];
  }
}
console.log(`The median of these values is:${median}`);
