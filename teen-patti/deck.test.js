const createDeck = require('./deck');

describe('deck', () => {
  it('should create a deck of 52 cards', () => {
    const deck = createDeck();
    expect(deck.getSize()).toBe(52);
  });

  it('should withdraw a card from the deck at random', () => {
    const deck = createDeck();

    const card = deck.withdrawCard();

    expect(deck.getSize()).toBe(51);
    expect(card.getSuit()).toBeDefined();
    expect(card.getRank()).toBeDefined();
  });

  it('should throw error if a deck is empty after withdrawing all cards', () => {
    const deck = createDeck();

    for (let i = 0; i < 52; i += 1) { deck.withdrawCard(); }

    expect(deck.getSize()).toBe(0);
    expect(() => deck.withdrawCard()).toThrow('Deck is empty');
  });
});
