/**
 * Create a promise (created here), that resolves with another promise,
 * that resolves with the string value "Nested promise value"
 */
const Promise2 = new Promise((resolve, reject) => {
  if (resolve) {
    resolve("Nested promise value");
    } 
  });
const myPromise = new Promise((resolve, reject) => {
  if (resolve) {
    resolve(Promise2);
    } 
  });

export default myPromise;
