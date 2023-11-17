console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n array.toSpliced() ---------------------------------------------`
);

const languages = ['Javascript', 'Python', 'Rust', ' Java'];

console.group(`\x1b[1m%s\x1b[0m`, 'Copy array without modify array'); // toSpliced without parameter
console.log(`languages`, languages);
console.log(`Copy full array: `, languages.toSpliced());
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `Inserting an element at a specific index`); // note: end = 0
console.log(`languages`, languages);
console.log(`languages.toSpliced(1, 0, 'C#')`, languages.toSpliced(1, 0, 'C#'));
console.log(`languages`, languages);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `\nReplacing element in array`);
console.log(`languages`, languages);
console.log(`languages.toSpliced(1, 1, 'Golang')`, languages.toSpliced(1, 1, 'Golang'));
console.log(`\nlanguages`, languages);
console.log(`languages.toSpliced(1, 1, 'Go','PHP')`, languages.toSpliced(1, 1, 'Go', 'PHP'));
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `\nDeleting elements starting from index`);
console.log(`languages`, languages);
console.log(`languages.toSpliced(2, 2)`, languages.toSpliced(2, 2));
console.log(`\nlanguages`, languages);
console.log(`lastNames.toSpliced(1, 4)`, languages.toSpliced(1, 4));
console.groupEnd();

console.groupEnd();
