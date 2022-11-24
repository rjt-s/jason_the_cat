// fetching the cat description based on the provided breed

const request = require('request');
// cat api url
let breed = process.argv[2];

if (!breed) {
  console.log("Please provide a cat breed in arguments");
  process.exit();
}

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// making api request
request(url, (error, response, body) => {
  console.log('error :', error);
  const data = JSON.parse(body);
  console.log(data[0]['description']);
});