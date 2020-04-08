
//1
function max(firstNumber, secondNumber) {
    return (firstNumber>secondNumber) ? firstNumber : secondNumber;
}


//2
function maxOfThree(firstNumber, secondNumber,thirdNumber) {
    return Math.max(firstNumber,secondNumber,thirdNumber);
}

//3
function isVowel(character) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(character);
}

//4
function sum (arr) {
    let sum = 0;
    for (let i of arr) {
         sum += Number(i);
    }
    return sum;
}

function product(arr) {
    let product = arr[0] ;
    for (let i of arr) {
         product *= Number(i);
    }
    return product;
   
}

/** 5
 * 
 * @param {string} text 
 */
function reverse(text){
   return text.split("").reverse().join("");
}

/** 6
 * 
 * @param {string[]} arrString 
 */
function findLongestWord(arrString) {
    let lengthWord = 0;
    arrString.forEach(item => {
            if (item.length>lengthWord)
                lengthWord = item.length;
        });
    return lengthWord;
}

/** 7
 * 
 * @param {string[]} arrString 
 * @param {Number} lengthWord
 */
function filterLongWords(arrString,lengthWord){
    let longWords = [];
    arrString.forEach(item => {
        if (item.length>lengthWord)
            longWords.push(item);
    });
    return longWords;
}
/** 8
 * 
 * @param {Number[]} arraySquares
 * 
*/
function computeSumOfSquares(arraySquares) {
    return arraySquares
        .map(item=>item*item)
        .reduce((a,b) => a+b,0);
}

/** 9
 * 
 * @param {Number[]} arr
 * 
*/
function printOddNumbersOnly(arr) {
    return arr.filter(element => (element%2 == 1));
}

/** 10
 * 
 * @param {Number[]} arr
 * 
*/
function computeSumOfSquaresOfEvensOnly(arr) {
   let evens = arr
        .filter(element => (element%2 == 0));
   return computeSumOfSquares(evens);
}

/** 11
 * 
 * @param {Number[]} arr
 * 
*/
function sumReduce (arr) {
    return arr.reduce((a,b) => a+b,0);
}   

/** 11
 * 
 * @param {Number[]} arr
 * 
*/
function productReduce (arr) {
    return arr.reduce((a,b) => a*b,1);
}   

/** 12
 * 
 * @param {Number[]} arr
 * 
*/
function findSecondBiggest(arr) {
    let firstBiggerIndex = 0;
    let seconBiggerIndex = 0;

    //finding first biggest in array
    for (let i in arr)
        if (arr[i]>arr[firstBiggerIndex])
        firstBiggerIndex = i;

    //second biggest in array
    for (let i in arr)
        if (i != firstBiggerIndex && arr[i] > arr[seconBiggerIndex])
        seconBiggerIndex = i;

    return arr[seconBiggerIndex];   
}


 /** 13
 * 
 * @param {Number} n
 * @param {Number} a
 * @param {Number} b
*/
function printFibo (n,a,b){
    
    let fibs = [a,b];
    while (n-2 >= 1) {
        let temp = a+b;
        a = b;
        b= temp;
        fibs.push(temp);
        n--;
    }

    console.log(fibs.join(','));
}

//14 -a
function getFormDataLogin (){
    let formData = new FormData(document.querySelector('form'));
    formData.forEach(v => console.log(v));
}

//14 -b
function getFormData (){
    let formData = new FormData(document.querySelector('form'));
    let contain  = [];
    formData.forEach(v => contain.push(v));
    alert(contain);
}

//15 is on timer.html embedded 