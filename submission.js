function findSum(arr) {
    return arr.reduce((a, b) => a + b);
}

// console.log(findSum([1, 2, 3]));
// console.log(findSum([10, 234, 356, 5, 3, 1, 3, 4]));
  

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

// console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));
// console.log(findFrequency(['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd']));
// console.log(findFrequency(['a', 'banana', 'a', 'd', 'd', 'd', 'd', 'b', 'b', 'c', 'c']));


function isPalindrome(str) {
    str = str.toLowerCase();
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i];
    }
    return str === revStr ? true : false;
}

// console.log(isPalindrome('rotator'));


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

// console.log(largestPair([5, 1, 2, 3, 1, 4]));
// console.log(largestPair([234, 32, 15, 344, 15, 34, 134, 2]));


function removeParenth(str) {
    str = str.replace('(', '');
    str = str.replace(')', '');
    return str;
}

// console.log(removeParenth('codingis(not)fun'));


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

// console.log(scoreScrabble('quintessential'));
// console.log(scoreScrabble('caziques'));