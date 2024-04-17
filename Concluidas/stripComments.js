function solution(input, markers) {
     const strings = input.split("\n");
     const output = [];
     
     for (let i = 0; i < strings.length; i++) {
       const index = findLastIndex(strings[i], markers);
       index > -1?
         output.push(strings[i].slice(0, index).trim()) :
         output.push(strings[i].trim());
       }
     
     return output.join("\n");
   }
   
   function findLastIndex(text, markers) {
     let lastIndex = -1;
     
     markers.forEach((mark) => {
       const index = text.lastIndexOf(mark);
       
      index > lastIndex ? lastIndex = index : "";
       });
     
     return lastIndex;
   }