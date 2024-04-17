module.exports = divideString;

function divideString(str, chunkWeigth) {
  let thisOutput = [];
  for (let i = 0; i < str.length; i += chunkWeigth) {
    let tempPush = [];
    for (let j = i; j < chunkWeigth + i; j++) {
      if (str[j] == undefined) {
        break;
      }
      tempPush.push(str[j]);
    }
    thisOutput.push(tempPush.join(""));
  }
  return thisOutput;
}
