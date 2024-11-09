//Child process is a node module used to create sub process within a script

const cp = require('child_process')

// cp.execSync('calc') //Open up the calculator

// cp.execSync('start chrome') //open chrome browser for us

// cp.execSync('start https://nodejs.org/docs/latest/api/documentation.html')

// cp.execSync('start chrome https://www.linkedin.com/in/skubal-a10799215/')

//------------------create one file in same dir and console log something --------------------------
// console.log(`output ${cp.execSync('node demo.js')}`) // It execute the file
// console.log(`${cp.execSync('node demo.js')}`)
// console.log(cp.execSync('node demo.js').toString())
console.log(cp.execSync('node demo.js', {encoding:'UTF-8'}))