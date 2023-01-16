const csvtojson = require('csvtojson')
const csvfilepath = "./data/data.csv"



csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)
})
