var context = require.context('./tests', true, /\.js$/);
context.keys().forEach(context);
console.log(context);
module.exports = context;