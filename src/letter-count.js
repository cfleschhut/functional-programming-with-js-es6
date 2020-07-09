const getLetterCount = (string) =>
  string.split('').reduce(
    (acc, letter) => ({
      ...acc,
      [letter]: acc[letter] ? acc[letter] + 1 : 1,
    }),
    {}
  );

export default getLetterCount;
