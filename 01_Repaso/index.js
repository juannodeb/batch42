require('dotenv').config()
const request = require('request');

// Ejercicio 1 (Sin autenticación)
const breakingBadQuote = () => {
  return new Promise((resolve, reject) => {
    const QUOTE_ENDPOINT = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

    request.get(QUOTE_ENDPOINT, (err, res, body) => {
      if (res.statusCode === 200) {
        const json = JSON.parse(body);
        const author = json[0].author;
        const quote = json[0].quote;
    
        resolve(`${author}: ${quote}`);
      } else {
        reject(`Error ${res.statusCode}: ${err}`);
      }
    })
  })
};

// breakingBadQuote()
//   .then((res) => console.log(`Sin autenticación --> \n ${res}`))
//   .catch((err) => console.log(`Sin autenticación --> \n ${err}`));

// Ejercicio 2 (Autenticación con API key)
const getIngredients = () => {
  return new Promise((resolve, reject) => {
    const API_ID = process.env.RECIPE_API_ID;
    const API_KEY = process.env.RECIPE_API_KEY;
    const RECIPE_ENDPOINT = `https://test-es.edamam.com/search?q=empanada&app_id=${API_ID}&app_key=${API_KEY}`;

    request.get(RECIPE_ENDPOINT, (err, res, body) => {
      if (res.statusCode === 200) {
        const json = JSON.parse(body);
        const ingredients = json.hits[0].recipe.ingredientLines

        resolve(`${ingredients}`);
      } else {
        reject(`Error ${res.statusCode}: ${err}`);
      }
    })
  })
};

// getIngredients()
//   .then((res) => console.log(`API key --> \n ${res}`))
//   .catch((err) => console.log(`API key --> \n ${err}`));

// Ejercicio 3 (Autenticación con OAuth)