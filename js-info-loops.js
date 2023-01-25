let a = "Attention! You will receive lots of popup alerts next, this is by design.";
alert(a);

// Task 1 - Last loop value

let b = 3;

while (b) {
  alert( b-- );
}

// Q: What is the last value alerted by this code? Why?
// A: 1 will be the last alert, because while(i) will loop until i is 0

// Task 2 - Which values get shown by the "for" loop?

// Prefix Form
let c = 0;
while (++c < 5) alert( c );
// Values: 1, 2, 3, 4

// Postfix Form
let i = 0;
while (i++ < 5) alert( i );

// Q: For every loop iteration, write down which value it outputs and then compare it with the solution.
// A: Prefix Form Values: Values: 1, 2, 3, 4
// A (Cont.): Postfix Form Values: 1, 2, 3, 4, 5