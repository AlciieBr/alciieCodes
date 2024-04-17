/*
For this code, i took almost a month and got a help from some friends but that's all set!

@maxbin is a functino that gets the max value of a power of 2 (in resume finds the higher 10[...]000 binary)
And this helped a lot...

@squarebuilder is a function that uses the sum of gauss to sum all numbers in the range of 0 -> maxBin

Finally, elderAge uses the squarebuilder (and a extra calc to get the rightsquare) to calculate the elder age with chunks

I have to greet my Math professor who helped me with some calculations, and congratulations to everyone who got until this points... this wasn't an easy task

Now i have the immortality!
*/


function elderAge(m, n, l, t) {
  // Verifica se algum dos valores é  0
  if (m < 1 || n < 1) return 0;
  // Deixa o comprimento maior que a altura
  if (m < n) return elderAge(n, m, l, t);
  // Verifica se há apenas uma linha
  if (n == 1) return squareBuilder(0, m, l, t);
  // Verifica se existe um quadrado perfeito, se sim, executa o código resumido
  const m1 = maxBin(m);
  const n1 = maxBin(n);

  if (m1 == n1) {
    return (
      ((squareBuilder(0, m1, l, t) * (m1 % t)) % t) + //  top-left
      ((((squareBuilder(m1, 2 * m1, l, t) * ((m + n - 2 * m1) % t)) % t) + // top-right
        elderAge(m - m1, n - n1, l, t)) % // Way Down We Go Now
        t)
    ) % t;
  } else {
    let charlie = Math.max(0, m1 - l);
    let nl = Math.max(0, l - m1);
    return (
      (((squareBuilder(0, m1, l, t) * (n % t)) % t) + //  top-left corner
        (((((charlie % t) * ((m - m1) % t)) % t) * (n % t)) % t) + // top-right
        elderAge(m - m1, n, nl, t)) % // Way Down We Go Now
      t
    ) % t;
  }
}

function maxBin(value) {
  value = Math.log2(value);
  value = Math.floor(value);
  return Math.pow(2, value);
}

function squareBuilder(m, n, l, t) {
  let m2 = Math.max(0, m - l);
  let n2 = Math.max(0, n - l);
  let alpha = m2 + n2 - 1;
  let beta = n2 - m2;
  if (alpha % 2 == 0) {
    alpha /= 2;
  } else {
    beta /= 2;
  }
  return ((alpha % t) * (beta % t)) % t;
}
