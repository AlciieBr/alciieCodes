function dblLinear(n) {
     let array = [1];
     let p1 = 0;
     let p2 = 0;
   
     for (i = 1; i <= n; i++) {
       array[i] = Math.min(2 * array[p1] + 1, 3 * array[p2] + 1);
       if (array[i] == 2 * array[p1] + 1) p1++;
       if (array[i] == 3 * array[p2] + 1) p2++;
     }
     return array[n];
   }