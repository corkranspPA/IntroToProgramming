/********************************************************************************/
/*                    Welcome to the Grader Than Workspace                      */
/*  Right-click the play button (triangle) in the upper right corner to run the */
/*  code below.                                                                 */
/********************************************************************************/

// We import the 'readline' module to help us read input from the command line.
const readline = require('readline');

// This will allow us to read input from the user and write output to the console.
const lineReader = readline.createInterface({
  input: process.stdin, // We set the input source to the the keyboard
  output: process.stdout // We set the output destination console/screen
});

// We print a welcome message to the console.
console.log("Welcome to Grader Than IDE");

// We prompt the user with a question: 'What is your name?'.
// Once the user answers, the provided function will be called with the user's answer.
lineReader.question('What is your name? ', (input) => {
  // We greet the user using the name they provided.
  console.log(`I am glad to be learning with you ` + input);
  console.log("\nLet's build something awesome 🥳!")
});