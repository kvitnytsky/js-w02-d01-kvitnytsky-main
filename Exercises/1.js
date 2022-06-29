/**
 * Create a promise (created here), that resolves with the value "Hello World"
 */
const myPromise = new Promise((resolve, reject) => {
if (resolve) {
  resolve("Hello World");
  } 
});

export default myPromise;

