function useRoll() {

  function diceRoll(sides: number) {
    return Math.floor(Math.random() * sides);
  }
  const typeRoll = diceRoll(3);
  const eventRoll = diceRoll(20);

  return [typeRoll,eventRoll];
}

export default useRoll;