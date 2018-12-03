const createCard = require('./card');

describe('card', () => {
  it('should create a card with properties', () => {
    const card = createCard({ suit: 'Spades', rank: 'A' });
    expect(card.getRank()).toBe('A');
    expect(card.getSuit()).toBe('Spades');
  });

  it('should create card out of valid suits and ranks', () => {
    const cardWithInvalidRank = { suit: 'Spades', rank: 'B' };
    const cardWithInvalidSuit = { suit: 'XXXX', rank: 'A' };

    expect(() => { createCard(cardWithInvalidRank); }).toThrow('Invalid rank B');
    expect(() => { createCard(cardWithInvalidSuit); }).toThrow('Invalid suit XXXX');
  });
});
