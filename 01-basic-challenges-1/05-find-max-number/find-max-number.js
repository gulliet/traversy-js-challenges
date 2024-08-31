function findMaxNumber(arr) {
    let max = arr[0];

    arr.forEach((num) => {
        if (num > max) max = num;
    });

    return max;
}

module.exports = findMaxNumber;
