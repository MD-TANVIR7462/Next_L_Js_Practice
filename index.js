// Task 1: Array Filtering And Mapping
const people = [
  { name: "Tanvir", age: 28, gender: "male" },
  { name: "nadia", age: 22, gender: "female" },
  { name: "Anis", age: 32, gender: "male" },
  { name: "Kajol", age: 26, gender: "female" },
  { name: "Shakib", age: 30, gender: "male" },
];

const maleNames = (peopleInfo) => {
  const filterFemale = peopleInfo.filter((person) => person.gender != "female");
  const remaining = filterFemale.map((singlePerson) => singlePerson.name);
  return remaining;
};
console.log(maleNames(people));

// Task 2: Object Manipulation
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

const bookTitle = (allBooks) => {
  const bookNames = allBooks.map((singleBook) => singleBook.title);
  console.log(bookNames);
};
console.log(bookTitle(books));

// Task 5: Find And Modify
const findAndModifyPerson = (people, name, newAge) => {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
};

const modifyAge = findAndModifyPerson(people, "Tanvir", 29);
console.log(modifyAge);

// Task 6: Array Reduction
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (numbers) => {
  return numbers.reduce((sum, number) => {
    if (number % 2 === 0) {
      return sum + number;
    } else {
      return sum;
    }
  }, 0);
};

console.log(sumOfEvenNumbers(numbers));
