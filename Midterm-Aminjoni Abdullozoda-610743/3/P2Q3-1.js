let arrayUtils = (function(){
   
     /** 
     * @param {Number[]} num;
     * * @param {Number} b;
    */
    const multiplesCount = function(num,b) {
        return num.filter(x => x%b==0).length;
    }

     /** 
     * @param {Number[]} num;
     */
    const reverseInPlace =  function(num) {
        return num.reduceRight((a, c) => (a.push(c), a), []);
    }

    return {
        multiplesCount : multiplesCount,
        reverseInPlace:reverseInPlace
    }
})
//3.1
let a = arrayUtils;
console.log(a().reverseInPlace ([1,2,3,4,5,6]));
