export const shuffleArray = (array, isShuffle, numberOfQuestions) => {
  if (isShuffle === "true") {
    const shuffledArray = array?.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray?.slice(0, numberOfQuestions);
  }
  return array?.slice(0, numberOfQuestions);
};
