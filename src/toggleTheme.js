import * as variables from "./variables.mjs";

variables.toggleTheme.addEventListener("click", () => {
    if (variables.toggleTheme.checked) {
        variables.docHtml.classList.add("darkTheme");
        variables.btnFormatter?.classList.remove("btn-outline-primary")
        variables.btnFormatter?.classList.add("btn-primary")
        variables.btnDelete?.classList.remove("btn-outline-danger")
        variables.btnDelete?.classList.add("btn-danger")
    } else {
        variables.docHtml.classList.remove("darkTheme")
        variables.btnFormatter?.classList.remove("btn-primary")
        variables.btnFormatter?.classList.add("btn-outline-primary")
        variables.btnDelete?.classList.remove("btn-danger")
        variables.btnDelete?.classList.add("btn-outline-danger")
    }

})