// We import the 'readline' module to help us read input from the command line.
const readline = require('readline/promises');

// This will allow us to read input from the user and write output to the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//These three 'async' functions will handle asking questions of the user
async function nameQuestion() {
  return rl.question('What is your name? ');
}

async function ageQuestion() {
  return rl.question('What is your age? ');
}

async function colorQuestion() {
  return rl.question('What is your favorite color? ');
}

//This async function organizes the questions and prints the answers once we are
//done waiting for the user to respond.
async function main() {
  let name = await nameQuestion();
  let age = await ageQuestion();
  let color = await colorQuestion();

  rl.close();

  console.log('Oh, so your name is ' + name + ', you\'re ' + age + ' years old, and your favorite color is ' + color);
}

//This call to the main() method sets off the whole program!
main();