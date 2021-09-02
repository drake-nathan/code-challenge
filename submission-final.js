function findSum(arr) {
    return arr.reduce((a, b) => a + b);
}


function findFrequency(arr) {
    arr.sort();
    let obj = {
        most: '',
        least: ''
    };
    let unique = [...new Set(arr)];
    let mostCount = 0;
    let leastCount = arr.length;
    
    for (const item of unique) {
        
        firstIndex = arr.indexOf(item);
        lastIndex = arr.lastIndexOf(item);
        count = lastIndex - firstIndex + 1;

        if (count > mostCount) {
            obj.most = item;
            mostCount = count;
        }
        if (count < leastCount) {
            obj.least = item;
            leastCount = count;
        }
    }

    return obj;
}


function isPalindrome(str) {
    str = str.toLowerCase();
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i];
    }
    return str === revStr ? true : false;
}


function largestPair(arr) {
    let largestProduct = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        let product = arr[i] * arr[i + 1];
        if (product > largestProduct) {
            largestProduct = product;
        }
    }
    return largestProduct;
}


function removeParenth(str) {
    str = str.replace('(', '');
    str = str.replace(')', '');
    return str;
}


function scoreScrabble(str) {
    let score = 0;
    for (const letter of str) {
        if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'].includes(letter)) {
            score += 1;
        } else if (['d', 'g'].includes(letter)) {
            score += 2;
        } else if (['b', 'c', 'm', 'p'].includes(letter)) {
            score += 3;
        } else if (['f', 'h', 'v', 'w', 'y'].includes(letter)) {
            score += 4;
        } else if (['k'].includes(letter)) {
            score += 5;
        } else if (['j', 'x'].includes(letter)) {
            score += 8;
        } else if (['q', 'z'].includes(letter)) {
            score += 10;
        }
    }
    return score;
}
