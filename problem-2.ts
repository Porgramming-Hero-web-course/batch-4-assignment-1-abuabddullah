/* 
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
*/
{
  const removeDuplicates = (arr: number[]): number[] => {
    // Set constructor সকল array elem কে {e1,e2,e3,e4} এভাবে নিচ্ছে অতঃপর spread opt তাদের একটা array তে convert করছে
    return [...new Set(arr)];
  };
  console.log(
    "🚀 ~ removeDuplicates ~ removeDuplicates:",
    removeDuplicates([1, 56465, 1, 521, 1, 1, 21, 3])
  );
}
