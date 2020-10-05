/*
Coding Mafia on LinkedIn:
Given an Array A of non negative integers, return the maximum sum of elements in two of non-overlapping (contiguous) subarrays, witch have lengths L and M. (For clarification, the L-length subarray could occur before or after the M-length subarray).

Formaly, return dthe largest V for which
V= (A[i]+A[i+1]...A[i+L-1]) + (A[j]+A[j+1]...A[j+M-1]) and either:
0<= i < i + L - 1 < j < j + M - 1 < A.length, or
0<= j < j + M - 1 < i < i + L - 1 < A.length
Input A=[0,6,5,2,2,5,1,9,4], L=1, M=2 Output: 20

**Understanding the problem Ordered list: 0,2,2,5,6 - 1,4,5,9 Ordered list: 0,1,2,2,4,5,5,6,9 '''

Call main() function to execute 
*/

function main() {
  
  // Getting a set of digits in Javascript
  const number = prompt("Enter a number with several digits. For example: 4664336");
  let digits = Array.from(number, x => parseInt(x));  // Map digits in number to a list
  digits.sort((a, b) => a-b);                         // Sort the list ascending
  const digitsLength = digits.length-1;               // Get string length -1

  // Getting value for lengths of subarrays
  const L = parseInt(prompt("Enter value for L-length: "));
  const M = parseInt(prompt("Enter value for M-lenght: "));

  let sumL = 0;
  let sumM = 0;

  for (let i=L-1; i>=0; i--) {
    sumL = sumL + digits[(digitsLength)-i];
  }
    
  for (let j=M-1; j>=0; j--) {
    sumM = sumM + digits[((digitsLength)-L)-j];
  }
  
  alert (sumL + sumM);
}
