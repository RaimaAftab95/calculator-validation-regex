//in this code i use regex regular expressions to capture any error in expression input

// gettinginput and  output class
const output= document.querySelector(".output");
const input= document.querySelector(".input");
// regex expression return true if result maatch otherwise false
// not accept ++ -- ** // ..
const regex = /(\d+\.\d+\.|\+\+|\+-|\+\*|\+\/|\+\.|--|\-\+|\-\*|\-\/|\-\.|\*\*|\*\+|\*\/|\*-|\*\.|\/\/|\/\+|\/-|\/\*|\/\.|\.\-|\.\*|\.\/|\.\+|\.\.)/g;
//console.log("ans==>",regex.test("+acbweerqwebc"));

// initializing "empty string" to pass expression values
let expression="";


// function to make expression
function makeExpression(enterValue)
{
const lastChar = expression[expression.length - 1];
 console.log("enter value is",enterValue);
 console.log("last char is",lastChar);
 // creating a temperory var to store expression value to check 
const temp = expression + enterValue;
// to get all entered values in expression
// exp=i;
console.log("The var temp have:",temp);

// check for double click of airthmatic symbols and decimal in expression
if (!regex.test(temp))
     {
   expression=expression+enterValue;
console.log(expression);
// to built input exp 
input.textContent=expression;
}
console.log("expression:",expression);
console.log("regex",regex.test(temp));
}


// making evauate function call on = sign
function calculate()
{
   try {
      const result = eval(expression);
      output.textContent= result;
      // clear expression after calculate result
      expression="";
   } 
   catch (error) 
   {
      output.textContent = 'Error';
      
   }
}

// calculate % func
function calculatePercentage()
 {
   try {
      //  const result = eval(expression) / 100;
      //const result = eval(expression + "* 0.01");
      const result = (eval(expression) / 100).toString();
       output.textContent= result;
         // clear expression after calculating and displaying result 
         // to clear expression variable
    expression="";
   } 
   catch (error) 
   {
      output.textContent = 'Error';
   }
}


// all clear expression and output
function allClear()
{
    // clear input and output
    output.textContent='';
    input.textContent='';
    // to clear expression variable
    expression="";
}

// function to calculate square root
function calculateSqrt()
{
   try {
      const sq= Math.sqrt(expression);
      output.textContent=sq;
      // clear expression after calculate result
      expression="";
   } 
 
   catch (error) {
      output.textContent = 'Error';
   }
}

// clear lastchar input
// if there is nothing to clear expression set to "0"
function backSpace() 
{
   expression = expression.slice(0, -1);
   input.textContent= expression;

   if(expression==="")
   { input.textContent="0";}
}