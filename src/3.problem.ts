/* 
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
*/
{
  const countWordOccurrences = (strg: string, wrd: string): number => {
    return strg
      .toLowerCase()
      .split(" ")
      .filter((st: string, i: number): boolean =>
        st.includes(wrd.toLowerCase())
      ).length;
  };
  console.log(
    "🚀 ~ countWordOccurrences ~ countWordOccurrences:",
    countWordOccurrences("TypeScript is great. I love TypeScript", "typescript")
  );
}
