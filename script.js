// let z=prompt("enter function name ");
// alert(z);
// function functionName() {
//     alert(arguments.callee.name);
// }

// // Calling the function to display its own name
// functionName();
function functionName() {
    alert(arguments.callee.name);
}

// Prompt the user for the function name
var customFunctionName = prompt("Enter the function name:");

// Define a new function with the prompted name
window[customFunctionName] = functionName;

// Call the dynamically named function to display its own name
window[customFunctionName]();

