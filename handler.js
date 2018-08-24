/**
 * @function run
 * @param {Object} event contians all request data
 * @param {Object} context contains AWS specific values e.g. AWS request ID 
 * @param {Function} callback Should be invoked with an error as the first argument
 * and a valid response as the second argument
 */
module.exports.run = (event, context, callback) => {
    callback(null, "Hello World");  
};