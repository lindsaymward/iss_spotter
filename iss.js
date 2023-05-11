// Contain most logic for fetching data from API endpoints.
const request = require('request');

// API request to get IP address
const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    body = JSON.parse(body);
    const ip = body.ip;
    callback(null, ip);
  });
};

// API request to get coordinates based on IP address
const fetchCoordsByIP = (ip, callback) => {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    body = JSON.parse(body);
    if (!body.success) {
      const msg = `Error when fetching coordinates. Response ${body.message} when looking for ${body.ip}`;
      callback(Error(msg), null);
      return;
    }

    const coords = {
      latitude: body.latitude,
      longitude: body.longitude
    };
    callback(null, coords);
    return;
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };