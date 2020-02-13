const request = require('request');
// const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    if (error) callback(error, null);
    const data = JSON.parse(body);
    // if data read was successful, run the function
    if (data[0]) {
      const desc = data[0].description.trim();
      callback(error, desc);
    } else {
      // pass in breed not found message
      callback(error,"Breed not found in database. You may have discovered a new cat :o");
    }
  });
};

module.exports = { fetchBreedDescription };