import { getBeers, renderFeaturedBeer } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const beerContainer = document.querySelector(".beer-container");
const loadNewButton = document.querySelector("button");

loadNewButton.addEventListener("click", loadNewBeer);

async function generateRandomBeer() {
  try {
    const beers = await getBeers();
    const randomBeer = beers[Math.floor(Math.random() * beers.length)];

    document.title = `${randomBeer.name} | Brewdog Beer Generator`;

    clearHtml(beerContainer);
    renderFeaturedBeer(randomBeer, beerContainer);
  } catch (error) {
    console.log(error);
    clearHtml(beerContainer);
    createMessage(beerContainer, ["border-danger", "text-danger"], "There was a problem loading this beer, please try again");
  }
}
generateRandomBeer();

function loadNewBeer() {
  clearHtml(beerContainer);
  generateRandomBeer();
}
