const { SUITS, RANKS } = require('./constants');
const createCard = require('./card');

function constructDeck() {
  const deck = [];
  SUITS.forEach((suit) => {
    Object.keys(RANKS).forEach((rank) => {
      deck.push(createCard({ suit, rank }));
    });
  });
  return deck;
}

module.exports = function createDeck() {
  const deck = constructDeck();
  const getSize = () => deck.length;
  const withdrawCard = () => {
    if (getSize() === 0) { throw Error('Deck is empty'); }
    const randomNumber = Math.floor(Math.random(getSize()));
    return deck.splice(randomNumber, 1)[0];
  };
  return {
    getSize,
    withdrawCard,
  };
};
