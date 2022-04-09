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
const toFirstCapital = document.querySelector("#toFirstCapital");
const toPascalCase = document.querySelector("#toPascalCase");
const toSnakeCase = document.querySelector("#tosnake_case");
const toScreamingSnakeCase = document.querySelector("#toScreamingSnakeCase");
const toKebabCase = document.querySelector("#toKebabCase");
const toTrainCase = document.querySelector("#toTrainCase");
const toCobolCase = document.querySelector("#toCobolCase");
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
  toFirstCapital,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toScreamingSnakeCase,
  toKebabCase,
  toTrainCase,
  toCobolCase,
  checkers,
  outFormatter,
};
