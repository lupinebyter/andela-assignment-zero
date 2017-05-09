'use strict';

module.exports = {

 /* Find all prime numbers from 0 to input limit... */
 getPrimes: (upperArrayLimit) => {
   // the logic goes here...
   //No even number can be prime except 2...
   //So our suspects are all looking odd today... o_O
   let primeArray = [], countLimit, outputPrimes = [], primesFound = 0;
   //if number is greater than or equal to 3, then 1,2,3 are known
   //offenders and must be brought to the lineup...
   for(let i = 0; (i < upperArrayLimit && i < 3); i++)
   {
      outputPrimes[i] = i+1;
      primesFound++;
   }
   //the rest of the odd numbers from 5 are tested for and included....
   //adapting seive of somedude...
   for(let i = 5; i<= upperArrayLimit; i++)
   {
      primeArray[i] = true;
   }
   countLimit = Math.sqrt(upperArrayLimit);

   for(let i = 5; i < countLimit; i++)
   {
      if(primeArray[i] === true)
      {
         for(let j = i*i; j< upperArrayLimit; j += i)
         {
            primeArray[j] = false;
         }
      }
   }
   for(let i= 5; i<= upperArrayLimit; i++)
   {
      if(primeArray[i] === true)
      {
         outputPrimes[primesFound] = i;
         primesFound++;
      }
   }
   return outputPrimes;
 }
}
