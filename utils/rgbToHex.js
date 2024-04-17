module.exports = rgb

function rgb(r, g, b) {
     return toHex(r) + toHex(g) + toHex(b);
   }
   
   function toHex(value) {
     value = Math.max(value, 0);
     value = Math.min(value, 255);
     return value.toString(16).padStart(2, "0").toUpperCase();
   }