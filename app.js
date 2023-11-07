console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++)

    if (i % 2 != 0) {
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let num = 1; num <= 100; num ++)
    if (num % 3===0 && i % 5 === 0){
        console.log("FIZZBUZZ")
    }
    else if (num % 3 === 0){
        console.log("FIZZ")
    }
    else if (num % 5 === 0){
        console.log("BUZZ")
    }

//Exercise 3 section
let whileNum = 1
while (whileNum <= 100)

{ if (num % 3 ===0 && i % 5 === 0){
    console.log("FIZZBUZZ")
}
else if (num % 3 === 0){
    console.log("FIZZ")
}
else if (num % 5 === 0){
    console.log("BUZZ")
}
}

let doNum = 1

do {
  if (doNum % 3 === 0 && doNum % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (doNum % 3 === 0) {
    console.log('FIZZ');
  } else if (doNum % 5 === 0) {
    console.log('BUZZ');
  }

  doNum++;
} while (doNum <= 100);



