function digitalRoot(n) {
  if (n < 10) {
    return n;
  } else {
    while (n > 9) {
      x = n.toString().split("");
      let thisSum = 0;
      for (i = 0; i < x.length; i++) {
        thisSum += parseInt(x[i]);
      }
      n = thisSum;
    }
    return n;
  }
}
