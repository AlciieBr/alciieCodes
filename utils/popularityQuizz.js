module.exports = popularityQuizz

function popularityQuizz(arr, clear = false) {
     let count = new Map();
   
     // Contagem dos elementos
     for (let element of arr) {
       count.set(element, (count.get(element) || 0) + 1);
     }

     if (clear == true ) {
     // Verificar se todos os elementos têm a mesma frequência
     let uniqueCounts = new Set(count.values());
     if (uniqueCounts.size === 1) {
       return [];
     }
}
   
     // Encontrar os elementos mais frequentes
     let maxCount = Math.max(...count.values());
     let mostFrequentElements = [...count.entries()]
       .filter(([_, count]) => count === maxCount)
       .map(([element]) => element);
   
     return [maxCount, mostFrequentElements];
   }