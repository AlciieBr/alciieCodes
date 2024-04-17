console.log(`${rgb(173, 255, 47)}
${rgb(300, 255, 255)}
${rgb(0, 0, -20)}
${rgb(0, 0, 0)}`);

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(value) {
  value = Math.max(value, 0);
  value = Math.min(value, 255);
  return value.toString(16).padStart(2, "0").toUpperCase();
}
