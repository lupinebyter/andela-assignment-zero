'use strict';

module.exports = {

 /* Find all prime numbers from 0 to input limit... */
 getPrimes: (upperArrayLimit) => {
   //No even number can be prime except 2...
   //So our suspects are all looking odd today... o_O
   let primeArray = [], countLimit, outputPrimes = [], primesFound = 0;
   //if number is greater than or equal to 3, then 1,2,3 are known
   //offenders and must be brought to the lineup...
   for(let i = 0; (i < upperArrayLimit && i < 4); i++)
   {
      outputPrimes[i] = i+1;
   }/*
   // your logic goes here
   for(let i = 3; i<upperArrayLimit; i+=2)
   {
      primeArray[i] = true;
   }
   countLimit = Math.sqrt(upperArrayLimit);
   for(let i = 2; i < upperArrayLimit; i++)
   {
      if(primeArray[i] === true)
      {
         for(let j = i*i; j< value; j+= i)
         {
            primes[j] = false;
         }
      }
   }
   for(let i= 2; i< upperArrayLimit; i++)
   {
      if(primeArray[i] === true)
      {
         outputPrimes[primesFound] = primeArray[i];
         primesFound++;
      }
   }*/
   return outputPrimes;
 }
}
