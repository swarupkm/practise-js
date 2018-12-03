const { SUITS, RANKS } = require('./constants');

function validateSuit(suit) {
  if (!SUITS.includes(suit)) {
    throw Error(`Invalid suit ${suit}`);
  }
}

function validateRank(rank) {
  if (!Object.keys(RANKS).includes(rank)) {
    throw Error(`Invalid rank ${rank}`);
  }
}


module.exports = function createCard(props) {
  validateSuit(props.suit);
  validateRank(props.rank);
  const { suit, rank } = props;

  return {
    getSuit: () => suit,
    getRank: () => rank,
  };
};
