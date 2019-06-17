const delay = require('delay')

async function trafficLights() {
  console.log('red')
  await delay(3000)
  console.log('yellow')
  await delay(1000)
  console.log('green')
  await delay(1000)
  await trafficLights()
}

(async function main() {
  trafficLights()
  // setInterval(() => { console.log(Date.now()) }, 2000)
})()
