//probelem 1 solution
const filterEvenNumbers = (input: number[]) => {
  return input.filter((element: number) => element % 2 === 0);
};

const resultEvent = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//problem 2 solution
const reverseString = (input: string) => {
  const inputLenght = input.length;
  let newString = "";
  for (let i = inputLenght - 1; i >= 0; i--) {
    newString = newString + input[i];
  }
  return newString;
};

const newStringValue = reverseString("typescript");

// problem 3 solution
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input == "string") {
    return "String";
  } else {
    return "Number";
  }
};
const result1 = checkType("Hello");
const result2 = checkType(42);

//problem 4 solution
const getProperty = <N, K extends keyof N>(input: N, key: K): N[K] => {
  return input[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

const resultProperty = getProperty(user, "name");

//problem 5 solution
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (input: Book) => {
  return {
    ...input,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const resultBook = toggleReadStatus(myBook);

//problem 6 solution
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const resultStudent = student.getDetails();

//problem 7 solution
const getIntersection = (arrOne: number[], arrTwo: number[]) => {
  return arrOne.filter((item) => arrTwo.includes(item));
};

const resultInter = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
