const SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const RANKS = {
  A: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
};

const FACE_OFF_RANK_ORDER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

module.exports = {
  SUITS,
  RANKS,
  FACE_OFF_RANK_ORDER,
};
