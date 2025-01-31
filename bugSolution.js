function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Error: Operands must be numbers';
  }
}

console.log(foo(1, '2')); // Output: Error: Operands must be numbers
console.log(foo(1, 2)); // Output: 3

// Alternative solution:  Using parseInt()
function foo2(a,b){
    return parseInt(a) + parseInt(b);
}
console.log(foo2(1, '2')); // Output: 3
console.log(foo2(1,2)); //Output: 3