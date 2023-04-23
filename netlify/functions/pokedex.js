// mod.cjs
// eslint-disable-next-line no-shadow, import/no-extraneous-dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// eslint-disable-next-line import/no-extraneous-dependencies
const { DateTime } = require('luxon');
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

// eslint-disable-next-line no-unused-vars
exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  console.log(chalk.blue(`Fetching... ${eventBody.region}`));

  const response = await fetch(POKE_API);
  const data = await response.json();
  console.log(chalk.blue('Success...'));
  const date = DateTime.now();

  console.log(chalk.blue(`User asked for: "${eventBody.region}" on [${date}]`));

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
