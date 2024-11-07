/* 
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
*/
{
  const removeDuplicates = (arr: number[]): number[] => {
    return [...new Set(arr)];
  };
  console.log(
    "🚀 ~ removeDuplicates ~ removeDuplicates:",
    removeDuplicates([1, 56465, 1, 521, 1, 1, 21, 3])
  );
}
