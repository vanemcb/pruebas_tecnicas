/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 *
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */

function parenthesisChecker(str) {

  str = String(str);

  let arrayBrackets = []

  for (let char of str) {
    if (char == '(' || char == '[' || char == '{') {
      arrayBrackets.push(char)
      continue
    }

    switch (char) {
      case ')':
        if (arrayBrackets[arrayBrackets.length - 1] == '(') {
          arrayBrackets.pop()
        }
        break;
      case ']':
        if (arrayBrackets[arrayBrackets.length - 1] == '[') {
          arrayBrackets.pop()
        }
        break;
      case '}':
        if (arrayBrackets[arrayBrackets.length - 1] == '{') {
          arrayBrackets.pop()
        }
        break;
    }
  }
  if (arrayBrackets.length == 0) {
    return true
  }
  return false;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);
