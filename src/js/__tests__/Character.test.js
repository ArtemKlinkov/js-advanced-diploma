import Character from '../Character';
import Bowman from '../characters/Bowman';

test('should throw error', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character(); }).toThrow('Запрещено создавать объекты класса Chatacter.');
});

test('should create bowman', () => {
  const bowman = new Bowman(1);
  const expectedBowman = {
    type: 'bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 50,
    distance: 2,
    distanceAttack: 2,
  };

  expect(bowman).toEqual(expectedBowman);
});
