let a = "Attention! You will receive lots of popup alerts next, this is by design.";
alert(a);


// Task 1 - Last loop value

// let b = 3;

// while (b) {
//   alert( b-- );
// }

// Q: What is the last value alerted by this code? Why?
// A: 1 will be the last alert, because while(i) will loop until i is 0


// Task 2 - Which values does the while loop show?

// Prefix Form
// let c = 0;
// while (++c < 5) alert( c );

// Postfix Form
// let d = 0;
// while (d++ < 5) alert( d );

// Q: For every loop iteration, write down which value it outputs and then compare it with the solution.
// A: Prefix Form Values: Values: 1, 2, 3, 4
// A (Cont.): Postfix Form Values: 1, 2, 3, 4, 5


// Task 3 - Which values get shown by the "for" loop?

// Prefix Form
// for (let e = 0; e < 5; e++) alert( e );

// Postfix Form
// for (let f = 0; f < 5; ++f) alert( f );

// Q: For each loop write down which values it is going to show. Then compare with the answer.
// Q (Cont.): Both loops alert same values or not?
// A: Prefix Form Values: 0, 1, 2, 3, 4
// A (Cont.): Postfix Form Values: 0, 1, 2, 3, 4


// Task 4 - Output even numbers in the loop

// Prompt: Use the for loop to output even numbers from 2 to 10.

// for (let g = 2; g <= 10; g++) {
//   if (g % 2 == 0) {
//     alert( g );
//   }
// }


// Task 5 - Replace "for" with "while"

for (let h = 0; h < 3; h++) {
  alert( `number ${h}!` );
}
// Original For Loop Output: number 0!, number 1!, number 2!

let j = 0;
while (j < 3) {
  alert( `number ${j}!` );
  j++;
}
// Modified While Loop Output: number 0!, number 1!, number 2!