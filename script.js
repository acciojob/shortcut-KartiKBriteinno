function shortcut(s1, s2) {
  // your code here 
if (s1.length === 0 || s2.length === 0) {
    return "''";
  } else {
    return s1[0] + s2[0];
  }
}
// Test the function with the provided examples
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));  // Output: 'Hw'
console.log(shortcut("", "International"));  // Output: ''
console.log(shortcut("Amnesty", ""));  // Output: ''



// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
