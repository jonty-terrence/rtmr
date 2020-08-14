const fs = require('fs')
const path = require('path')

module.exports = {
    getAll
}

const filePath = path.join(__dirname, './data/auckland-businesses.json')

function getAll (callback) {
    fs.readFile(filePath, 'utf8', (err, contents) => {
        if(err) return callback(err)
        const businesses = JSON.parse(contents)
        callback(null, businesses)
    })
}