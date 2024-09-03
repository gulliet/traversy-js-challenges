function titleCase(str) {
    let withinAWord = false;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            withinAWord = false;
            continue;
        }
        if (withinAWord) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
            withinAWord = true;
            console.log(`${i} ${arr[i]}`);
        }
    }

    return arr.join("");
}

module.exports = titleCase;
