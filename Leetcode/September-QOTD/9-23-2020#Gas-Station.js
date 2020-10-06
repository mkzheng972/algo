var canCompleteCircuit = function(gas, cost) {
  const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
  const totalCost = cost.reduce((acc, curr) => acc + curr, 0);

  if (totalCost > totalGas) return -1;

  for (let i = 0; i < gas.length; i++) {
    let currGas = 0;
    let currCost = 0;
    let j = i;

    while (j < gas.length && currGas >= currCost) {
      currGas += gas[j];
      currCost += cost[j];
      j++;
    }

    if (currGas >= currCost) return i;
  }

  return -1;
};
