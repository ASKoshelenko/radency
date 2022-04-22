function getAllCombinationsTowns(list, k) {
    let k1 = k;
    if (k1 == 1) {
        return list.map(x => [x]);
    }
    let combinations = [];
    for (let i = 0; i <= (list.length - k1); i++) {
        let nextCombinations = getAllCombinationsTowns(list.slice(i + 1), k1 - 1)
        for (let j = 0; j < nextCombinations.length; j++) {
            combinations.push(nextCombinations[j].concat([list[i]]))
        }
    }
    return combinations;
}


const chooseOptimalDistance = (t, k, ls) => {
    if (k < 1) {
        return null;
    }
    if (ls.length < 1) {
        return null;
    }
    if (k > ls.length) {
        return null;
    }
    ways = getAllCombinationsTowns(ls, k);
    waysLengths = ways.map(
        x => x.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0)
    );
    waysLengths = waysLengths.filter(
        (el) => {
            return el <= t
        }
    );
    if (waysLengths.length == 0) {
        return null
    }
    return Math.max(...waysLengths);
};


a = chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
b = chooseOptimalDistance(163, 3, [50]); // null