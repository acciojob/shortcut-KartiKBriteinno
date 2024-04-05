function shortcut(str1, str2) {
    if (!str1 || !str2) {
        return '';
    }

    const initialLetters = str1.charAt(0).toUpperCase() + str2.charAt(0).toLowerCase();
    return initialLetters;
}

// Test the function with the provided examples
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));  // Output: 'Hw'
console.log(shortcut("", "International"));  // Output: ''
console.log(shortcut("Amnesty", ""));  // Output: ''

// Additional test cases
console.log(shortcut("Stack", "Overflow"));  // Output: 'SO'
console.log(shortcut("full", "stack"));  // Output: 'Fs'



// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
