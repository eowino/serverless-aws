/**
 * @function run
 * @param {Object} event contians all request data
 */
module.exports.run = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World"
        })
    };
};