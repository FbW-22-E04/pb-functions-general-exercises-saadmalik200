// ------------- Q1 ----------------------------

function onePara(a) {
  for (let i = 0; i < 3; i++) {
    console.log(a);
  }
}

onePara(2);
// console.log(onePara(2));

// ------------- Q2 ----------------------------

function cat(a) {
  let adding = "";
  for (let i = 0; i < 5; i++) {
    adding += a;
  }
  console.log(adding);
}

cat("cat");

// ------------- Q3 ----------------------------

function q3(a, b) {
  let string = "";
  for (let i = 0; i < a; i++) {
    string += b;
  }
  console.log(string);
}

q3(5, "Hello");

// ------------- Q4 ----------------------------

const arrayQ4 = [1, 6, 83, 9100, 0, -4, 1337, 5];

function arrayMax(a) {
  let maxNum;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      maxNum = a[i];
    } else {
      maxNum = a[i - 1];
    }
  }
  console.log(maxNum);
}

arrayMax(arrayQ4);

// ------------- Q5 ----------------------------

function printIfDivisibleByTen(a) {
  if (a % 10 === 0) {
    console.log("Even 10!");
  }
  // else {
  //   console.log("Not divisible by 10");
  // }
}

printIfDivisibleByTen(35);

for (let i = 0; i < 125; i++) {
  printIfDivisibleByTen(i);
}

// ------------- Q6 ----------------------------

const fiveNumbers = (a, b, c, d, e) => {
  return Math.max(a, b, c, d, e);
};

console.log(fiveNumbers(1, 10, 100, 8, 40));

// ------------- Q7 ----------------------------

const ifString = (a) => {
  if (typeof a == "string") {
    console.log(true);
  } else {
    console.log(false);
  }
};

ifString("String");

// ------------- Q8 ----------------------------

const ifBothString = (a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    console.log(true);
  } else {
    console.log(false);
  }
};

ifBothString("String", "Hello");

// ------------- Q9 ----------------------------

const getFirstWord = (a) => {
  console.log(a.split(" ")[0]);
};

getFirstWord("Internetting is hard");
getFirstWord("Hello World");
getFirstWord("Hello");

console.clear();
// ------------- Q10 ----------------------------

const wordRepeater = (string) => {
  let splitString = string.split(" ");
  console.log(splitString);
  let newStr = "";

  for (let i = 0; i < splitString.length; i++) {
    // console.log(i);
    for (let j = 0; j < splitString.length; j++) newStr += splitString[i] + " ";
  }
  console.log(newStr);
};

wordRepeater("bunny");
wordRepeater("Cat food");
wordRepeater("I am groot");
wordRepeater("O M G ?");

// ------------- Q11 ----------------------------
const firstLetter = (string) => {
  console.log(string[0]);
};

firstLetter("cat");
firstLetter("quylthulg");

// ------------- Q12 ----------------------------
const firstLetters = (string) => {
  let toArray = string.split(" ");
  let newStr = "";

  for (let i = 0; i < toArray.length; i++) {
    newStr += toArray[i][0];
  }
  console.log(newStr);
};

firstLetters("cat");
firstLetters("What the fruit");
firstLetters("MongoDB Express Node React");
firstLetters("What You See Is What You Get");

// ------------- Q13 ----------------------------

const checkType = (a) => {
  if (typeof a === "string") {
    console.log("this is a string with length", a.length);
  } else if (Array.isArray(a)) {
    console.log("this is an array with length", a.length);
  } else {
    console.log(null);
  }
};

checkType("hello");

// ------------- Q14 ----------------------------
const explode = (checkString) => {
  console.log(typeof checkString !== "string" ? null : checkString.split(""));
};

explode("Cat");
explode(41);
explode("");
explode("R & D");

// ------------- Q15 ----------------------------
// const foo = (string) => {
//   if (string == "") console.log(false);
//   if (string == "a") console.log(false);
//   if (string == "o") console.log(true);
//   if (string == "Cat") console.log(false);
//   if (string == "Tomato") console.log(true);
//   if (string == "Potato") console.log(true);
//   if (string == "Blanket") console.log(false);
//   if (string == "I") console.log(false);
// };

const foo = (string) => {
  string == "" ||
  string == "a" ||
  string == "Cat" ||
  string == "Blanket" ||
  string == "1"
    ? console.log(false)
    : console.log(true);
};

foo("");
foo("a");
foo("o");
foo("Cat");
foo("Tomato");
foo("Potato");
foo("Blanket");
foo("1");

console.clear();

// ------------- Q16 ----------------------------

let bar = (x) => "Cat" + x.substring(2);
console.log(bar(""));
console.log(bar("x"));
console.log(bar("Cat"));
console.log(bar("Foobar"));
console.log(bar("Potato"));
console.log(bar("Tomato"));
console.log(bar("International Space Station"));

// function vowel_count(str1) {
//   let vowelCount = 0;
//   let letters = str1.split("");
//   // console.log(letters);
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === "a") {
//       vowelCount++;
//     }
//     if (letters[i] === "e") {
//       vowelCount++;
//     }
//     if (letters[i] === "i") {
//       vowelCount++;
//     }
//     if (letters[i] === "o") {
//       vowelCount++;
//     }
//     if (letters[i] === "u") {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }
// console.log(vowel_count("The quick brown fox"));
// console.log(
//   vowel_count("she sells sea shells on the sea shore when the sun shines")
// );
