# JavaScript Type Coercion Bug

This repository demonstrates a common error in JavaScript related to type coercion with the `+` operator.  When adding a number and a string, JavaScript will implicitly convert the number to a string and perform concatenation instead of addition. This can lead to unexpected results.

The `bug.js` file shows the incorrect behavior, and the `bugSolution.js` provides a corrected version using explicit type checking or a different approach for addition.