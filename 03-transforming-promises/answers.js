/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    return promise.catch(reason => reject(reason)).then((param)=> transformer(param)).then(value => resolve(value)).catch(reason => reject(reason));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {

  return numberPromise.catch(reason => Promise.reject(reason))
    .then(value => Number.isInteger(+value) ? Promise.resolve(Math.pow(+value, 2)) :
      Promise.reject(`Cannot convert '${value}' to a number!`));
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} promise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => Promise.resolve(0))
    .then(value => Promise.resolve(value));
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(value => Promise.reject(value), reason => Promise.resolve(reason));
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};