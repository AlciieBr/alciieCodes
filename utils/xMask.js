module.exports = xMask;

function xMask(str, finalLength, maskType = "x", start = false) {
str = str.toString()
if (maskType.length > 1) maskType = maskType.slice(0, 1)
let index = str.length - finalLength

let mask;
if (index >= 0) {
    start ? mask = str.slice(0, finalLength) : mask = str.slice(index);
    while (mask.length < str.length) {
    start ? mask = mask + maskType : mask = maskType + mask;
    }
  } else {
    mask = str;
  }
  return mask; 
}