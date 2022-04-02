class TextFormatter {
  constructor(str) {
    this._initialStr = str;
    this.newStr = str;
  }

  get inputValue() {
    return this.newStr;
  }

  set inputValue(newStr) {
    this.newStr = newStr;
  }

  removeAccents() {
    this.newStr = this.newStr
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\W/g, " ");

    return this;
  }

  camelSentence() {
    this.newStr = this.newStr
      .trim()
      .toLowerCase()
      .replace(
        /[^a-zA-Z0-9ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç]+(.)/g,
        (match, chr) => chr.toUpperCase()
      );

    return this;
  }

  toLowerCase() {
    this.newStr = this.newStr.toLowerCase();
    return this;
  }

  toUpperCase() {
    this.newStr = this.newStr.toUpperCase();
    return this;
  }

  capitalize() {
    const arr = this.newStr.toLowerCase().split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    this.newStr = arr.join(" ");
    return this;
  }

  toPascalCase() {
    const arr = this.newStr.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    this.newStr = arr.join("");
    return this;
  }

  toSnakeCase() {
    this.newStr = this.newStr.replaceAll(" ", "_");
    return this;
  }
}
