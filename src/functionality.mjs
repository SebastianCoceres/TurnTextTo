import * as v from "./variables.mjs";
import { NJS } from "./Nomenclature.mjs";

//functionality
export function updateData() {
  NJS.value = v.inFormatter.value;
  let result;
  if (v.clearAccents.checked) result = NJS.removeAccents();
  if (v.toUpperCase.checked) result = NJS.UpperCase();
  if (v.toLowerCase.checked) result = NJS.LowerCase();
  if (v.capitalize.checked) result = NJS.capitalize();
  if (v.toFirstCapital.checked) result = NJS.Firstcapital();
  if (v.toCamelCase.checked) result = NJS.camelSentence();
  if (v.toPascalCase.checked) result = NJS.toPascalCase();
  if (v.toSnakeCase.checked) result = NJS.toSnakeCase();
  if (v.toScreamingSnakeCase.checked) result = NJS.toScreamingSnakeCase();
  if (v.toKebabCase.checked) result = NJS.toKebabCase();
  if (v.toTrainCase.checked) result = NJS.toTrainCase();
  if (v.toCobolCase.checked) result = NJS.toCobolCase();
  v.outFormatter.innerHTML = result.value;
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
