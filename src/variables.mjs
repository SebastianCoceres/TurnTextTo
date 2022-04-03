//just to make it more redeable

//input
const inFormatter = document.querySelector("#formatter");
//buttons
const btnFormatter = document.querySelector("#btnFormatter");
const btnDelete = document.querySelector("#btnDelete");
//checkers
const clearAccents = document.querySelector("#ClearAccents");
const toUpperCase = document.querySelector("#toUpperCase");
const toLowerCase = document.querySelector("#toLowerCase");
const capitalize = document.querySelector("#capitalize");
const toCamelCase = document.querySelector("#toCamelCase");
const toPascalCase = document.querySelector("#toPascalCase");
const toSnakeCase = document.querySelector("#tosnake_case");
const checkers = document.querySelectorAll(".input-radio-custom");
//output
const outFormatter = document.querySelector("#outputFormatter");

export {
  inFormatter,
  btnFormatter,
  btnDelete,
  clearAccents,
  toUpperCase,
  toLowerCase,
  capitalize,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  checkers,
  outFormatter,
};
