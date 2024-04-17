function digPow(n, p) {
     let sum = 0;
     for (let i = 0; i < n.toString().length; i++) {
         base = n.toString()[i]
         potencia = parseInt(p + i)
         sum += base ** potencia;
     }
     let k = (sum / n)
     if (Number.isInteger(k)) {
         return k
     } else {
         return -1
     }
 }