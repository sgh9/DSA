

/*
    1) Largest Number in Array
 */

const getLargestNumber  = (array)=> {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element > max) {
            max = element;
        }
        
    }

    return max;
}

const max = getLargestNumber([3, 5, 1, 2, 8, 11, 7, 0, 15]);
log({max});


/*
2) Second Largest Number in Array
*/

const getSecondLargestNumber  = (array)=> {
    let firstMax = array[0];
    let secondMax = array[1];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if(element > secondMax) {
            secondMax = element;
        }

        if(secondMax > firstMax) {
            let temp = firstMax;
            firstMax = secondMax;
            secondMax = temp;
        }
        
    }

    return secondMax;
}

const getSecondLargestNumber2  = (array)=> {
    let firstMax = getLargestNumber(array);
    let secondMax = array[1];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if(element > secondMax && firstMax !== element) {
            secondMax = element;
        }
        
    }

    return secondMax;
}

const secondLargest = getSecondLargestNumber([3, 5, 1, 2, 8, 11, 17, 0, 15]);
const secondLargest2 = getSecondLargestNumber([3, 5, 1, 2, 8, 11, 17, 0, 150]);
log({secondLargest})
log({secondLargest2})


/*
3) second smallest
*/

const getSecondSmallestNumber2  = (array)=> {
    let firstSmall = array[0];
    let secondSmall = Number.MAX_VALUE;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if(element < secondSmall) {
            secondSmall = element;
        }

        if(secondSmall < firstSmall) {
            let temp = firstSmall;
            firstSmall = secondSmall;
            secondSmall = temp;
        }
        
    }

    return secondSmall;
}

const secondSmallest = getSecondSmallestNumber2([3, 5, 1, 2, 8, 11, 17, 1.5, 15]);

log({secondSmallest})

/**
 * 4) check sorted array
 */

const isSorted = (array)=> {
    for (let index = 0; index < array.length - 1; index++) {
        const a1 = array[index];
        const a2 = array[index+1];
        if(a2 < a1) {
            return false;
        }
        
    }
    return true;
}
log(isSorted([1,4, 4, 5, 7, 7.5, 8]));

/*

5) remove duplicate in a sorted array
 */

const removeDuplicate = (array)=> {
    let newArr = [];
    let map = {};
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if(map[e]) continue;

        map[e] = e;
        newArr[j]= e;
        j++;
    }

    return newArr;
}
const removeDuplicate2 = (arr)=> [...new Set(arr)];

log(removeDuplicate([1,4, 1, 1, 1,14, 5, 7, 7, 8, 8, 9]));
log(removeDuplicate2([1,4, 1, 1, 1,14, 5, 7, 7, 8, 8, 9]));

/*
6) remove duplicate from sorted array
*/

const removeDuplicateFromSortedArr = (array)=> {
    let j = 0;
    let newArr = [array[j]];

    for (let i = 1; i < array.length; i++) {
        const e = array[i];
        if(e !== newArr[j]) {
            j++;
            newArr[j] = e;
        }
    }

    return newArr;
}

log(removeDuplicateFromSortedArr([2, 2, 3, 4, 4, 5, 5, 5 , 5, 6 , 7 , 8, 9, 9]))

