function shortcut(str1, str2) {
    if (!str1 || !str2) {
        return '';
    }

    return str1.charAt(0).toUpperCase() + str2.charAt(0).toUpperCase();
}

// Test cases with specified outputs
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));  // Output: 'HW'
console.log(shortcut("", "International") || "''");  // Output: ''
console.log(shortcut("Amnesty", "") || "''");  // Output: ''


// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
