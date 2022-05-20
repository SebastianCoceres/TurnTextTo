import * as variables from "./src/variables.mjs";
import { updateData } from "./src/functionality.mjs";

//user actions
variables.btnFormatter.addEventListener("click", updateData);
variables.btnDelete.addEventListener("click", () => {
  variables.inFormatter.value = "";
  variables.outFormatter.innerHTML = "";
});

//keyboard anc checkers
variables.inFormatter.addEventListener("input", function () {
  DebounceFormatter();
});
variables.checkers.forEach((el) => {
  el.addEventListener("change", updateData);
});

//maybe debouncing this we get better performance
function debounce(callback, delay = 1000) {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
}

const DebounceFormatter = debounce(() => {
  updateData();
}, 500);


