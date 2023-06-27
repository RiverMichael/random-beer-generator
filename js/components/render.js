import { createFeaturedBeerHtml } from "./createHtml.js";

const beersUrl = "https://api.punkapi.com/v2/beers";

async function getApi(url) {
  const response = await fetch(url);
  const results = await response.json();

  return results;
}

export async function getBeers() {
  return getApi(beersUrl);
}

export function renderFeaturedBeer(beer, parentElement) {
  createFeaturedBeerHtml(beer, parentElement);
}
