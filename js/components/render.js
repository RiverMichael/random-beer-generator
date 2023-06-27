import { createFeaturedBeerHtml } from "./createHtml.js";

const beersUrl = "https://api.punkapi.com/v2/beers";

/**
 * Calls an API and fetches the data
 * @param {*} url The url of the API to call
 * @returns The results in JSON
 */
async function getApi(url) {
  const response = await fetch(url);
  const results = await response.json();

  return results;
}

/**
 * Calls the Punk API and fetches the beers data
 * @returns The beers in JSON
 */
export async function getBeers() {
  return getApi(beersUrl);
}

/**
 * Renders the beers and creates the HTML to display
 * @param {*} beers The list of beers to render
 * @param {*} parentElement What element to append the HTML to
 */
export function renderFeaturedBeer(beers, parentElement) {
  createFeaturedBeerHtml(beers, parentElement);
}
