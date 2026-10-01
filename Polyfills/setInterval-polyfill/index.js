intervalsKey = Symbol()
intervalIdTrackerKey = Symbol()

window.intervalIdTracker = 1000
window.intervals = {}
window.setInterval = function (callback, interval, ...args) {
  const intervalId = window.intervalIdTracker++
  function execute() {
    callback(...args)
    window.intervals[intervalId].interval += interval
  }
  const timeToCall = Date.now() + interval
  window.intervals[intervalId] = {
    callback: execute,
    interval: timeToCall,
    args,
  }

  if (Object.keys(window.intervals.length === 1)) {
    processIntervals()
  }

  return intervalId
}

function processIntervals() {
  function executeIntervals(key) {
    const { callback, interval, args } = window.intervals[key]
    if (Date.now() >= interval) {
      callback()
    } else {
      requestIdleCallback(processIntervals)
    }
  }
  Object.keys(window.intervals).forEach(executeIntervals)
}

window.clearInterval = function (id) {
  delete window.intervals[id]
}

setInterval(() => {
  console.log('learning frontend')
}, 1000)

function showName(name) {
  console.log('Name is', name)
}

console.log('1')
const id = setInterval(showName, 1000, 'Silver surfer')

console.log('2')
