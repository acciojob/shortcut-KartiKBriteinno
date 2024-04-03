function shortcut(str1, str2) {
  // Check for empty strings and return an empty string if either is empty
  if (!str1 || !str2) {
    return '';
  }

  // Extract the first character from each string (using charAt(0))
  const firstLetter1 = str1.charAt(0).toUpperCase();
  const firstLetter2 = str2.charAt(0).toUpperCase();

  // Combine and return the initials
  return firstLetter1 + firstLetter2;
}

// Example Usage
console.log(shortcut("Amnesty", "International")); // Output: "AI"
console.log(shortcut("Hello", "world"));          // Output: "Hw"
console.log(shortcut("'", "'"));      // Output: ""
console.log(shortcut("'", "'"));            // Output: ""




// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
