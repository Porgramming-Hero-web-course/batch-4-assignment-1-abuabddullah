/* 
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
*/
{
  const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, item) => acc + item, 0);
  };
  console.log("🚀 ~ sumArray ~ sumArray:", sumArray([1, 2, 3, 4, 5]));
}
