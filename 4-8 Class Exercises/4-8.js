//Try to fix the functions below!  These will mostly have errors involving
//syntax errors - missing brackets, parenthesis, keywords, and other requirements.

//---------------------------------------------------------------------------
//This function declaration has an error that is preventing the computer from
//recognizing the declaration as a function
multiply(p1, p2) {
  return p1 * p2;
}
console.log(multiply(2,8)); //should output 16
console.log(multiply(10,4)); //should output 40
console.log(multiply(-2,3.5)); //should output 7
//---------------------------------------------------------------------------
//This function has an error preventing the computer from understanding what
//'divisor' is.  
function divide(dividend) {
    return dividend / divisor;
}
console.log(divide(3,1)); //should output 3
console.log(divide(30,2)); //should output 15
console.log(divide(3,1)); //should output 3
//---------------------------------------------------------------------------
//This function has an error preventing the computer from identifying the return
//statement as being part of the function.
function add(n1, n2)
  return n1 + n2;

console.log(add(1,1)); //should output 2
console.log(add(5,10)); //should output 15
console.log(add(1,-1)); //should output 0
//---------------------------------------------------------------------------
//This function has an error causing the computer to believe the function body
//is empty.
function diff(d1, d2);
{
  return d1 - d2;
}
console.log(diff(1,1)); //should output 0
console.log(diff(5,10)); //should output -5
console.log(diff(1,-1)); //should output 2
//---------------------------------------------------------------------------
//This function declaration has an error preventing the computer from
//identifying the 'n' parameter.
function square n {
  return n * n;
}
// *****************************************************************************
// * The following functions have logical errors that the computer cannot see, *
// *  but are affecting the output                                             *
// *****************************************************************************
//---------------------------------------------------------------------------
//This function has an error that prevents it from returning a value.
function toCelsius(fahrenheit) {
  (5/9) * (fahrenheit-32);
}
console.log(toCelsius(212)); //should output 100
console.log(toCelsius(32)); //should output 0
//---------------------------------------------------------------------------
//This function has an error preventing it from printing the user's color choice correctly.
function favColor(col)
{
  return 'My favorite color is ' + 'col';
}
console.log(favColor('blue')); //should output 'My favorite color is blue'
console.log(favColor('red')); //should output 'My favorite color is red'
console.log(favColor('green')); //should output 'My favorite color is green'
//---------------------------------------------------------------------------
//This function contains an error that prevents the computer from correctly
//comparing the value stored in pw
function checkPassword(pw)
{
  if(pw = 'guest')
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(checkPassword('guest')); //should output true
console.log(checkPassword('admin')); //should output false