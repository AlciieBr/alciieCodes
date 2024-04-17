function reverseVowels(str) {
let tempstr = str.split("")
const vogais = 'aeiouAEIOU'
let indicesVogais = [];
  
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      indicesVogais.push(i);
        console.log(indicesVogais)
    }
  }
  str = str.split("")
  let i = 0
  let j = indicesVogais.length-1
  
  while (i < j)
    {
      [tempstr[indicesVogais[i]], tempstr[indicesVogais[j]]] = [tempstr[indicesVogais[j]], tempstr[indicesVogais[i]]]
      console.log(tempstr)
      i++
      j--
    }
  return tempstr.join("")
}