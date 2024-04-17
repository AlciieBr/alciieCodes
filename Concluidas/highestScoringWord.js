function high(x){
     let words = x.toLowerCase().split(" ")
     let allValues = []
     console.log(words)
     for (i = 0; i < words.length; i++) {
       let acc = 0;
       for (j = 0; j < words[i].length; j++) {
         let thisLetter = words[i].toString().charCodeAt(j) - 96
         acc += parseInt(thisLetter)  
       }
       allValues.push(acc)
       acc = 0
     }
     return words[allValues.indexOf(Math.max(...allValues))]
   }