export default class Drunkard {
  run(cards1: number[], cards2: number[]) {
    let round = 0;
    let result = "";
    do {
      const card1 = cards1.pop();
      const card2 = cards2.pop();

      if (card1 === undefined && card2 === undefined) {
        return "Botva!";
      }

      if (card1 === undefined) {
        return `Second player. Round: ${round}`;
      }

      if (card2 === undefined) {
        return `First player. Round: ${round}`;
      }

      if (card1 === card2) {
        round += 1;
      } else if (card1 > card2) {
        cards1.unshift(card1, card2);
        round += 1;
      } else {
        cards2.unshift(card2, card1);
        round += 1;
      }
    } while (round < 100);
    return "Botva!";
  }
}
