// Require and run main fetch function

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("24.68.71.207", (error, coordinates) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log("Here you go: ", coordinates);
// });

