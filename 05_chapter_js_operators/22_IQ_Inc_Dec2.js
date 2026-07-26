
// ERT:
// ┌──────┬──────────┬───────────────┬──────────┬─────────────┬──────────────┐
// │ Step │Expression│ i (before)    │ Operation│ Value Used  │ i (after)    │
// ├──────┼──────────┼───────────────┼──────────┼─────────────┼──────────────┤
// │  1   │ i++      │     1         │ post-inc │     1       │     2        │
// │  2   │ ++i      │     2         │ pre-inc  │     3       │     3        │
// │  3   │ 1 + 3    │     -         │ addition │     4       │     -        │
// └──────┴──────────┴───────────────┴──────────┴─────────────┴──────────────┘
// result = 4, i = 3

let i = 1;
let result = i++ + ++i;
console.log(result, i); // Output: 4 3

let a = 10;
let result1 = a++ + ++a;
console.log(result1, a);

let b = 10;
let result2 = (++b + b++);
console.log(result2, b);

let c = 10;
let result3 = (++c + ++c);
console.log(result3, c);