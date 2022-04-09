class NJS extends String{
  constructor(str) {
    this.newStr = str;
  }

  get value() {
    return this.newStr;
  }

  set value(newStr) {
    this.newStr = newStr;
  }

  static removeAccents() {
    this.value = this.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\W/g, " ");

    return this;
  }

  static LowerCase() {
    this.value = this.value.toLowerCase();
    return this;
  }

  static UpperCase() {
    this.value = this.value.toUpperCase();
    return this;
  }

  static capitalize() {
    const arr = this.LowerCase().value.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    this.value = arr.join(" ");
    return this;
  }

  static Firstcapital() {
    let temp = this.LowerCase().value;
    this.value = temp.charAt(0).toUpperCase() + temp.slice(1);
    return this;
  }

  static camelSentence() {
    this.value = this.removeAccents()
      .LowerCase()
      .value.trim()
      .replace(
        /[^a-zA-Z0-9ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç]+(.)/g,
        (match, chr) => chr.toUpperCase()
      );

    return this;
  }

  static toPascalCase() {
    const arr = this.removeAccents().LowerCase().value.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    this.value = arr.join("");
    return this;
  }

  static toSnakeCase() {
    this.value = this.removeAccents().UpperCase().value.replaceAll(" ", "_");
    return this;
  }
}

export { NJS };
