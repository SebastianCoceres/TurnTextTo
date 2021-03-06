import * as v from "./variables.mjs";
import { TTT } from "./turnTextTo.mjs";

//functionality
export function updateData() {
  TTT.value = v.inFormatter.value;
  let result;
  if (v.clearAccents.checked) result = TTT.removeAccents();
  if (v.toUpperCase.checked) result = TTT.UpperCase();
  if (v.toLowerCase.checked) result = TTT.LowerCase();
  if (v.capitalize.checked) result = TTT.capitalize();
  if (v.toFirstCapital.checked) result = TTT.Firstcapital();
  if (v.toCamelCase.checked) result = TTT.camelSentence();
  if (v.toPascalCase.checked) result = TTT.toPascalCase();
  if (v.toSnakeCase.checked) result = TTT.toSnakeCase();
  if (v.toScreamingSnakeCase.checked) result = TTT.toScreamingSnakeCase();
  if (v.toKebabCase.checked) result = TTT.toKebabCase();
  if (v.toTrainCase.checked) result = TTT.toTrainCase();
  if (v.toCobolCase.checked) result = TTT.toCobolCase();
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
