// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert, AssertionError } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it('return error when an invalid/non-existent breed is passed in.', (done) => {
    fetchBreedDescription('dog', (err, desc) => {
      // we expect errors in this case
      assert.equal(err, 'Cat type not found');
      const expectedDesc = null;
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});