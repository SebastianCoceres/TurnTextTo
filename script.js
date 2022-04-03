import * as variables from "./src/variables.mjs";
import {updateData} from "./src/functionality.mjs"

//user actions
variables.btnFormatter.addEventListener("click", updateData);
variables.btnDelete.addEventListener("click", () => {
  variables.inFormatter.value = "";
  variables.outFormatter.innerHTML = "";
});

//keyboard anc checkers
variables.inFormatter.addEventListener("keyup", function () {
  updateData();
});
variables.checkers.forEach((el) => {
  el.addEventListener("change", updateData);
});

