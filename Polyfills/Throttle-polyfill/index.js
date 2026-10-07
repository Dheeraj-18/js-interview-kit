const throttleScroll = throttle(manageScroll, 1000)

function handleScroll() {
  throttleScroll()
}

function manageScroll() {
  console.log('Tracking Scroll Event')
}

// function throttle(callback, delay) {
//   let waiting = false

//   return function throttledFunction() {
//     if (!waiting) {
//       callback()
//       waiting = true
//       setTimeout(() => {
//         waiting = false
//       }, delay)
//     }
//   }
// }

// ----------------------------------------
// Throttle without setTimeout

// function throttle(callback, delay) {
//   let lastCall = 0

//   return function throttledFunction() {
//     let now = Date.now()
//     if (now - lastCall >= delay) {
//       callback()
//       lastCall = now
//     }
//   }
// }

//----------------------------------------------------------------------------------------
// Throttle with leading and trailing configuration 

function throttle(callback, delay, options = {}) {
  const { leading = false, trailing = true } = options
  const self = this || globalThis
  let timeoutId = ''

  let lastCall = 0

  return function throttledFunction(...args) {
    let now = Date.now()

    if (!leading && lastCall == 0) {
      lastCall = now
    }

    // Has enough time passed since the last execution?
    if (now - lastCall >= delay) {
      callback.apply(self, args)
      lastCall = now
      clearTimeout(timeoutId)
      timeoutId = ''
    } else if (trailing && !timeoutId) {
      timeoutId = setTimeout(() => {
        callback.apply(self, args)
        lastCall = leading ? now : 0
        timeoutId = ''
      }, delay)
    }
  }
}
