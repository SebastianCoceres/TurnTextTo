import * as v from "./variables.mjs";
import { TextFormatter } from "./TextFormatter.mjs";

//functionality
const TextFormatter1 = new TextFormatter();

export function updateData() {
  TextFormatter1.inputValue = v.inFormatter.value;
  let result;

  if (v.clearAccents.checked) result = TextFormatter1.removeAccents();
  if (v.toUpperCase.checked) result = TextFormatter1.toUpperCase();
  if (v.toLowerCase.checked) result = TextFormatter1.toLowerCase();
  if (v.capitalize.checked) result = TextFormatter1.capitalize();
  if (v.toCamelCase.checked) result = TextFormatter1.camelSentence();
  if (v.toPascalCase.checked) result = TextFormatter1.toPascalCase();
  if (v.toSnakeCase.checked) result = TextFormatter1.toSnakeCase();

  v.outFormatter.innerHTML = result.inputValue;
}

const copyBtn = document.querySelector("#copyBtn");
copyBtn.addEventListener("click", copy);

async function copy() {
  //since execCommand() is deprecated is better do this instead
  let copyText = v.outFormatter;
  var tempInput = document.createElement("input");
  tempInput.value = copyText.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); //for mobile devices
  document.body.removeChild(tempInput);
  await navigator.clipboard.writeText(tempInput.value);

  //just an animation
  copyBtn.classList.remove("btn-primary");
  copyBtn.classList.add("btn-success");
  copyBtn.innerHTML = "copied!";
  setTimeout(() => {
    copyBtn.classList.remove("btn-success");
    copyBtn.classList.add("btn-primary");
    copyBtn.innerHTML = "copy";
  }, 2000);
}
