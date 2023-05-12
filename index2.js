// Similar to index but with Javascript Promises instead

const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const pass of passTimes) {
      const date = new Date(0);
      date.setUTCSeconds(pass.risetime);
      console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });