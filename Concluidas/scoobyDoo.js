/*
==> Step 1: Rotate all letters to the right by 5
==> Step 2: Reverse the whole string
==> Step 3: Add 5 letters onto every even letter in the Villans Name ie a=>f
*/

function scoobydoo(villian, villians) {
  let index = villian.length - 1;
  for (let i = 0; i < 5; i++) {
    villian = villian[index] + villian;
    villian = villian.slice(0, -1);
  } // Step 1

  villian = villian.split("").reverse(); // Step 2

  index = villian.length;
  for (let i = 0; i < index; i++) {
    i++;
    if (villian[i]) {
      villian[i] = caesarShift(villian[i], 5);
    }
  }
  villian = villian.join("");
  return findVillianName(villian, villians);
}

function caesarShift(text, key) {
  unicodeCode = text.charCodeAt(0);
  if (unicodeCode >= 65 && unicodeCode <= 90) {
    // uppercase letter
    unicodeCode = ((unicodeCode - 65 + key) % 26) + 65;
  } else if (unicodeCode >= 97 && unicodeCode <= 122) {
    // lowercase letter
    unicodeCode = ((unicodeCode - 97 + key) % 26) + 97;
  }
  return String.fromCharCode(unicodeCode);
}

function findVillianName(text, villians) {
  var similarVillianName = villians.find(function (villianName) {
    return text
      .toLowerCase()
      .includes(villianName.toLowerCase().replace(/\s/g, ""));
  });
  return similarVillianName;
}
