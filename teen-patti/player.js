module.exports = function createPlayer() {
  let cardSet;
  const setCardSet = (_cardSet) => {
    cardSet = _cardSet;
  };

  const getCardSet = () => cardSet;

  return {
    setCardSet,
    getCardSet,
  };
};
