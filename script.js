const inFormatter = document.querySelector('#formatter');

const btnFormatter = document.querySelector('#btnFormatter');
const btnDelete = document.querySelector('#btnDelete');

const clearAccents = document.querySelector('#ClearAccents');
const toUpperCase = document.querySelector('#toUpperCase');
const toLowerCase = document.querySelector('#toLowerCase');
const capitalize = document.querySelector('#capitalize');
const toCamelCase = document.querySelector('#toCamelCase');
const toPascalCase = document.querySelector('#toPascalCase');
const toSnakeCase = document.querySelector('#tosnake_case');

const outFormatter = document.querySelector('#outputFormatter')

// CLOUSURES TEST
function textFormatter() {
    return {
        removeAccents: function (str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\W/g, " ");
        },
        camelSentence: function (str) {
            return str.trim().toLowerCase().replace(/[^a-zA-Z0-9ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç]+(.)/g, (match, chr) => chr.toUpperCase());
        },
        toLowerCase: function (str) {
            return str.toLowerCase()
        },
        toUpperCase: function (str) {
            return str.toUpperCase()
        },
        capitalize: function (str) {
            let str2 = " ";
            const arr = str.split(" ");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                str2 = arr.join(" ");
            }
            return str2
        },
        toPascalCase: function (str) {
            let str2 = " ";
            const arr = str.split(" ");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                str2 = arr.join("");
            }
            return str2
        },
        toSnakeCase: function (str) {
            return str.replaceAll(" ", "_")
        }
    }
}

let textFormatter1 = textFormatter()

function consoleTest() {
    if (inFormatter.value) {
        let cadena = inFormatter.value;
        let result = " ";
        let temp = " ";
        if (clearAccents.checked) {
            result = textFormatter1.removeAccents(cadena)
        }
        if (toUpperCase.checked) {
            result = textFormatter1.toUpperCase(cadena)
        }
        if (toLowerCase.checked) {
            result = textFormatter1.toLowerCase(cadena)
        }
        if (capitalize.checked) {
            temp = textFormatter1.toLowerCase(cadena)
            result = textFormatter1.capitalize(temp)
        }
        if (toCamelCase.checked) {
            temp = textFormatter1.removeAccents(cadena)
            result = textFormatter1.camelSentence(temp)
        }
        if (toPascalCase.checked) {
            temp = textFormatter1.removeAccents(textFormatter1.toLowerCase(cadena))
            result = textFormatter1.toPascalCase(temp)
        }
        if (toSnakeCase.checked) {
            temp = textFormatter1.removeAccents(textFormatter1.toLowerCase(cadena))
            result = textFormatter1.toSnakeCase(temp)
        }



        outFormatter.innerHTML = result
    }
}

btnFormatter.addEventListener('click', consoleTest)
btnDelete.addEventListener('click', () => {
    inFormatter.value = "";
    outFormatter.innerHTML = "";
})

inFormatter.addEventListener('keyup', function (evt) {
    if (event.key === "Enter") {
        consoleTest()
    }
})