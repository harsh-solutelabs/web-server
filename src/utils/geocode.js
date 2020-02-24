const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWVodGFoYXJzaDkyOSIsImEiOiJjazZuZjBobW4xMDUxM2xucTg4ZXJ6NThoIn0.GKWJaccSdlG1HJXAL1Zc-g ";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location ", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};
module.exports = geoCode;

//Geocodind-longitude-latitude------------------------------------------------------
// const geoUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVodGFoYXJzaDkyOSIsImEiOiJjazZuZjBobW4xMDUxM2xucTg4ZXJ6NThoIn0.GKWJaccSdlG1HJXAL1Zc-g";

// request({ url: geoUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable To connect location services");
//   } else if (response.body.features.length === 0) {
//     console.log("LOcation Not found");
//   } else {
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(longitude, latitude);
//   }
// });
