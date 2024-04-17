function productFib(prod) {
     let fibonacci = [1, 0]
     let beta = 0;
     while (beta < prod) {
         fibonacci.unshift(parseInt(fibonacci[0] + fibonacci[1]))
         beta = parseInt(fibonacci[0] * fibonacci[1])
     }
     let thisMatch = (beta == prod)
     const output = [fibonacci[1], fibonacci[0], thisMatch]
     return output
 }