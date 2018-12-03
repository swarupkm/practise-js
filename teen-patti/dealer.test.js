const dealer = require('./dealer');
const createPlayer = require('./player');

describe('dealer', () => {
  it('should be able to deal cards to a player with a default size 3', () => {
    const player = createPlayer();
    dealer.dealCardsToPlayer(player, 3);
    expect(player.getCardSet().length).toBe(3);
  });

  it('should throw error if dealer has insufficient cards to be given to player', () => {
    const player = createPlayer();
    expect(() => dealer.dealCardsToPlayer(player, 53)).toThrow('Insufficient Cards in deck');
  });
});
