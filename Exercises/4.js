/**
 * In the function, you get a boolean argument shouldResolve
 * Return a promise, that resolves if the argument is true
 * otherwise the promise should reject
 * @param {boolean} shouldResolve
 */
function resolveMeMaybe(shouldResolve) {
  const myPromise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve();
    }
    reject();
    }
  )
return myPromise
}

export default resolveMeMaybe;
