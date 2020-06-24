require('dotenv').config()
const request = require('request');

// Ejercicio 1 (Sin autenticación)
  const QUOTE_ENDPOINT = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

  request.get(QUOTE_ENDPOINT, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      const author = json[0].author;
      const quote = json[0].quote;
    
      console.log(`Sin Autenticación --> \n ${author}: ${quote} \n`);
    } else {
      console.log(`Sin Autenticación --> \n Error ${res.statusCode}: ${err} \n`);
    }
  });

// Ejercicio 2 (Autenticación con API key)
  const API_ID = process.env.RECIPE_API_ID;
  const API_KEY = process.env.RECIPE_API_KEY;
  const RECIPE_ENDPOINT = `https://test-es.edamam.com/search?q=empanada&app_id=${API_ID}&app_key=${API_KEY}`;

  request.get(RECIPE_ENDPOINT, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      const ingredients = json.hits[0].recipe.ingredientLines

      console.log(`API_KEY --> \n ${ingredients} \n`);
    } else {
      console.log(`API_KEY --> \n Error ${res.statusCode}: ${err} \n`);
    }
  });

// Ejercicio 3 (Autenticación con OAuth)