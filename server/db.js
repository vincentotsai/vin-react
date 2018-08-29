const fs = require('fs')

exports.read = function (callback) {
  fs.readFile('./server/mock-flights.json', { encoding: 'utf8' }, function (err, data) {
    if (err) throw err
    callback(JSON.parse(data))
  })
}

exports.write = function (data, callback) {
  fs.writeFile('./server/mock-flights.json', data, function (err) {
    if (err) throw err
    callback()
  })
}