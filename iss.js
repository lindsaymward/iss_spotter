// Contain most logic for fetching data from API endpoints.
const request = require('request');

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


module.exports = { fetchMyIP };

// 'https://api.ipify.org?format=json'