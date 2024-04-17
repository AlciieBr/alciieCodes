toCamelCase("the_stealth_warrior");

function toCamelCase(str) {
if (!str) { return str; }
  let output = [];
  str = str.split("");
  for (i = 0; i < str.length; i++) {
    if (str[i] == "_" || str[i] == "-") {
      str[i + 1] = str[i + 1].toString().toUpperCase();
    } else {
      output.push(str[i]);
    }
  }
  output = output.join("");
}
