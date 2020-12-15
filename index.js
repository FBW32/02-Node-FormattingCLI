const { formatting } = require("./formatting")
const { showHelp } = require("./messaging")
const { capitalizeInitial } = require("./capitalizeInitial")

// console.log(process.argv)

const str = process.argv.slice(2).filter(item => item != '--help')
const helpStr = process.argv.slice(2).filter(item => item == '--help')

if (helpStr.length != 0) {
    console.log(showHelp(capitalizeInitial(formatting(...str))))
} else {
    console.log(capitalizeInitial(formatting(...str)))
}


/*
    node index.js "mIAmi   Vice"
    node index.js "mIAmi   Vice" --help
*/