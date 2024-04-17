function amaroPlan(pirateNum) {
  let outcome = new Array(pirateNum).fill(0);
  outcome[0] = pirateNum * 20; //Captain gets all the gold
  let i = pirateNum % 2 == 0 ? pirateNum - 2 : pirateNum - 1;
  while (i >= 2) {
    outcome[i] += 1;
    outcome[0] -= 1;
    i -= 2;
  }
  return outcome;
}
