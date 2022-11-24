// fetching the cat description based on the provided breed

const request = require('request');


// refactored request function
const fetchBreedDescription = (breedName, cb) => {
  if (!breedName) {
    return cb('please provide a cat breed in arguments', null);
  }
  
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // making api request
  request(url, (error, response, body) => {
    const catData = JSON.parse(body)[0];
    if (catData === undefined) {
      return cb('Cat type not found', null);
    }
    return cb(null, catData['description']);
  });
};


module.exports = { fetchBreedDescription };