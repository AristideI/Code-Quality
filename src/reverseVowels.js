function reverseVowels(str) {
  const vowels = ["a", "e", "u", "i", "o"];
  const stringVowels = [...str].filter((elt) =>
    vowels.includes(elt.toLowerCase())
  );
  return [...str]
    .map((elt) => {
      if (vowels.includes(elt.toLowerCase())) {
        return stringVowels.pop();
      }
      return elt;
    })
    .join("");
}
