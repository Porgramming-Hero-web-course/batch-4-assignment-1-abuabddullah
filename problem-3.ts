/* 
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
*/
{
  const countWordOccurrences = (strg: string, wrd: string): number => {
    // প্রাপ্ত strg কে split করে arra পাচ্ছি সেটাকে filter করে শুধু wrd ওয়ালা elems নিচ্ছি ও তার lngth বের করছি
    return strg
      .toLowerCase()
      .split(" ")
      .filter((st: string, i: number): boolean =>
        st.includes(wrd.toLowerCase())
      ).length;
  };
  console.log(
    "🚀 ~ countWordOccurrences ~ countWordOccurrences:",
    countWordOccurrences("I love typescript", "typescript")
  );
}
