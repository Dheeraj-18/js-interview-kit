// Note: Debouncing is a programming technique that helps to improve the performance of web applications by
//       limiting the frequency of function calls. (think of this as
//       something like a rate limiter

// Note: In general, Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the
//       last time it was called. This can be useful for scenarios where
//       we want to avoid unnecessary or repeated function calls that
//       might be expensive or time-consuming

const inputElement = document.querySelector('input')

const debounce = (func, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId)  // clear previous call 
    timerId = setTimeout(() => func(...args), wait)
  }
}

const callApi = (e) => {
  console.log('callApi', e.target.value)
}

const debouncedCallApi = debounce(callApi, 1000)

inputElement.addEventListener('input', debouncedCallApi)
