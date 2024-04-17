function factorial(n) {
     let result = '1';
     for (let i = 2; i <= n; i++) {
       let carry = 0;
       for (let j = result.length - 1; j >= 0; j--) {
         let product = i * Number(result[j]) + carry;
         result = result.slice(0, j) + (product % 10) + result.slice(j + 1);
         carry = Math.floor(product / 10);
       }
       if (carry > 0) {
         result = carry + result;
       }
     }
     return result;
   }