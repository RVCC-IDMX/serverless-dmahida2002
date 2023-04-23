// eslint-disable-next-line import/no-extraneous-dependencies
const { DateTime } = require('luxon');
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

exports.handler = async function () {
  const date = DateTime.now();
  console.log(chalk.blue(`${date}: Hello from Netlify Functions!`));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};
