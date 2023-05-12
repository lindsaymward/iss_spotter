// Similar to iss but with Javascript Promises instead

const request = require('request-promise-native');

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => {
    const parsedBody = JSON.parse(body).response;
    return parsedBody;
});
}

// Fetch IP using API
const fetchMyIP = () => {
 return request('https://api.ipiy.org?format=json');
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
}

const fetchISSFlyOverTimes = (body) => {
  const parsedBody = JSON.parse(body);
  const coords = {
    latitude: parsedBody.latitude,
    longitude: parsedBody.longitude
  }
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
}

module.exports = { nextISSTimesForMyLocation };