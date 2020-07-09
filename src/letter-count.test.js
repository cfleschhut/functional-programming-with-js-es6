import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');

    expect(actual).to.deep.equal(expected);
  });
});
