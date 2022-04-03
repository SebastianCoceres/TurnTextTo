import * as variables from "./variables.mjs";
import { TextFormatter } from "./TextFormatter.mjs";

//functionality
const TextFormatter1 = new TextFormatter();

export function updateData() {
  TextFormatter1.inputValue = variables.inFormatter.value;
  let result;

  if (variables.clearAccents.checked) {
    result = TextFormatter1.removeAccents();
  }
  if (variables.toUpperCase.checked) {
    result = TextFormatter1.toUpperCase();
  }
  if (variables.toLowerCase.checked) {
    result = TextFormatter1.toLowerCase();
  }
  if (variables.capitalize.checked) {
    result = TextFormatter1.capitalize();
  }
  if (variables.toCamelCase.checked) {
    result = TextFormatter1.camelSentence();
  }

  if (variables.toPascalCase.checked) {
    result = TextFormatter1.toPascalCase();
  }
  if (variables.toSnakeCase.checked) {
    result = TextFormatter1.toSnakeCase();
  }

  variables.outFormatter.innerHTML = result.inputValue;
}

const copyBtn = document.querySelector("#copyBtn");
copyBtn.addEventListener("click", copy);

async function copy() {
  let copyText = variables.outFormatter;
  var tempInput = document.createElement("input");
  tempInput.value = copyText.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.body.removeChild(tempInput);
  await navigator.clipboard.writeText(tempInput.value);

  //
  copyBtn.classList.remove("btn-primary");
  copyBtn.classList.add("btn-success");
  copyBtn.innerHTML = "copied!"
  setTimeout(() => {
    copyBtn.classList.remove("btn-success");
    copyBtn.classList.add("btn-primary");
    copyBtn.innerHTML = "copy"
  }, 2000);
}
