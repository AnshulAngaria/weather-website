const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8776faff7572ffe11dd762f834137622/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' +
             body.currently.precipProbability + '% chance of rain.'+' Cloud cover is '+body.currently.cloudCover.toFixed(2) * 100+'%. '+' Visibility is '+
             (body.currently.visibility*10).toFixed(2) +'%. ')
          //   console.log(body)
        }
    })
}

module.exports = forecast
