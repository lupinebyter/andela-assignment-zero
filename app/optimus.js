'use strict';

module.exports = {

 /* Find all prime numbers from 0 to input limit... */
 getPrimes: (upperArrayLimit) => {
   // the logic goes here...
   //Before any logic, root out edge cases...
   if(isNaN(upperArrayLimit))
   {
      return 'Error: Invalid Input';
   }
   if(upperArrayLimit<=0)
   {
      return (upperArrayLimit===0)?'Error: Zero Input':
         'Error: Negative Input';
   }
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
   for(let i = 5; i<=upperArrayLimit; i+=2)
   {
      if(module.exports.isPrime(i))
      {
         outputPrimes[primesFound] = i;
         primesFound++;
      }
   }
   return outputPrimes;
 },
 isPrime : (primeHopeful) => {
   for(let i = 2; i< primeHopeful; i++)
   {
      if(primeHopeful%i === 0)
      {
         return false;
      }
   }
   return primeHopeful > 1;
 }
}
