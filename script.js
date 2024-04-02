function shortcut(str1, str2) {
    // Check if either of the strings is empty
    if (str1 === '' || str2 === '') {
        return '';
    }
    
    // Get the initial letters of the strings and convert them to uppercase
    const initialLetters = str1.toLowerCase().charAt(0).toUpperCase() + str2.toLowerCase().charAt(0).toUpperCase();
    
    return initialLetters;
}

// Test cases
console.log(shortcut("Amnesty", "International")); // Output: 'AI'
console.log(shortcut("Hello", "world")); // Output: 'Hw'
console.log(shortcut("", "International")); // Output: ''
console.log(shortcut("Amnesty", "")); // Output: ''



// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
