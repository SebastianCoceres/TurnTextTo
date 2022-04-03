class TextFormatter {
  #newStr;
  constructor(str) {
    this.#newStr = str;
  }

  get inputValue() {
    return this.#newStr;
  }

  set inputValue(newStr) {
    this.#newStr = newStr;
  }

  removeAccents() {
    this.#newStr = this.#newStr
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\W/g, " ");

    return this;
  }

  toLowerCase() {
    this.#newStr = this.#newStr.toLowerCase();
    return this;
  }

  toUpperCase() {
    this.#newStr = this.#newStr.toUpperCase();
    return this;
  }

  capitalize() {
    const arr = this.#newStr.toLowerCase().split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    this.#newStr = arr.join(" ");
    return this;
  }

  camelSentence() {
    this.#newStr = this.removeAccents()
      .inputValue.trim()
      .toLowerCase()
      .replace(
        /[^a-zA-Z0-9ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç]+(.)/g,
        (match, chr) => chr.toUpperCase()
      );

    return this;
  }

  toPascalCase() {
    const arr = this.removeAccents().inputValue.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    this.#newStr = arr.join("");
    return this;
  }

  toSnakeCase() {
    this.#newStr = this.removeAccents()
      .inputValue.toLowerCase()
      .replaceAll(" ", "_");
    return this;
  }
}

export { TextFormatter };
