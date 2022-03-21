//Homework 3

//Exercise 1

function lengthOfArray (arr) {
    for(let i = 0 ; ; i++){
        if(arr[i] === undefined){
            return i;
        }
    }
}

//Exercise 2

function SumOfArrNum (arr) {
    let result = 0;
    for(let i = 0 ; i < arr.length ; i++){
        result += arr[i];
    }
    return result;
}

//Exercise 3

function getPowersOfTree (num1, num2) {
    let result = [];
    for(num1 ; num1 < num2 ; num1++){
        if(Math.log2(num1) / Math.log2(3) % 1 === 0 && num1 !== 1) {
            result.push(num1);
        }
    }
    return result;
}


//Exercise 4

function numToArray (num) {
    let arrNum = [];

    while (num > 0) {
        arrNum.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    return arrNum;
}


function insertDashBetweenEven (number) {
    let arrOfNum = numToArray(number);
    let result = []

    for(let i = arrOfNum.length - 1 ; i >= 0  ; i--) {
       if(arrOfNum[i] % 2 === 0 && arrOfNum[i - 1] % 2 === 0) {
           result.unshift(arrOfNum[i]);
           result.unshift("-");
           
       } else{
           result.unshift(arrOfNum[i]);
       }
    }

    let numWithDash = ""

    for(let j = 0 ; j < result.length ; j++){
        numWithDash += result[j] ;
    }
    return numWithDash;
 }


//Exercise 5

function primeNum (num) {
    let primeNumArr = [2, 3, 5];

    for(let i = 2 ; primeNumArr.length < num ; i++ ) {
        if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
            continue;
        } else {
            primeNumArr.push(i);
        }
    }
    return primeNumArr[primeNumArr.length - 1];
}