const createDeck = require('./deck');

class Dealer {
  constructor(deck) {
    this.deck = deck;
  }

  dealCardsToPlayer(player, count = 1) {
    if (count > this.deck.getSize()) { throw Error('Insufficient Cards in deck'); }

    const currentCardSet = [];

    for (let i = 0; i < count; i += 1) {
      currentCardSet.push(this.deck.withdrawCard());
    }

    player.setCardSet(currentCardSet);
  }
}


module.exports = new Dealer(createDeck());
