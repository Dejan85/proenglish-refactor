const useStringSplit = (): {
  stringSplit: (string: string) => { firstWord: string; secondWord: string };
} => {
  const stringSplit = (
    string: string
  ): { firstWord: string; secondWord: string } => {
    const str = string.split("-");
    const firstWord = str[0];
    const secondWord = str[1];
    return { firstWord, secondWord };
  };

  return {
    stringSplit,
  };
};

export default useStringSplit;
