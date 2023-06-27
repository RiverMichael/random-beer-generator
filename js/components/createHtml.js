/**
 * Clears the HTML of an element
 * @param {*} parentElement The element to clear
 * @example
 * const container = documentquerySelector(".container");
 *
 * clearHtml(container);
 */
export function clearHtml(parentElement) {
  parentElement.innerHTML = "";
}

/**
 * Creates the HTML for a beer and appends it to an element
 * @param {*} beer The beer to create HTML for
 * @param {*} parentElement The element to append the HTMl to
 */
export function createFeaturedBeerHtml(beer, parentElement) {
  const container = document.createElement("div");
  container.classList.add("featured-beer", "card", "p-4", "rounded-5", "shadow", "border-0", "container", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  container.id = beer.id;

  const title = document.createElement("h2");
  title.classList.add("text-center", "card-title", "mb-2");
  title.innerText = beer.name;
  container.append(title);

  const tagline = document.createElement("p");
  tagline.classList.add("card-text", "text-center", "mb-4");
  tagline.innerText = beer.tagline;
  container.append(tagline);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("featured-beer__image");
  container.append(imageContainer);

  const image = document.createElement("img");
  image.classList.add("card-img", "img-fluid", "mb-4");
  image.style = `max-width: 100px; height: auto`;
  image.src = beer.image_url;
  image.alt = beer.name;
  imageContainer.append(image);

  const description = document.createElement("p");
  description.classList.add("card-text", "mb-4");
  description.innerText = beer.description;
  container.append(description);

  const detailsList = document.createElement("ul");
  detailsList.classList.add("list-group", "list-group-flush", "rounded", "mb-4");
  container.append(detailsList);

  const abv = document.createElement("li");
  abv.classList.add("list-group-item", "bg-body-secondary", "fw-bold");
  abv.innerText = "Abv: ";
  detailsList.append(abv);

  const abvSpan = document.createElement("span");
  abvSpan.classList.add("fw-normal");
  abvSpan.innerText = `${beer.abv}%`;
  abv.append(abvSpan);

  const ph = document.createElement("li");
  ph.classList.add("list-group-item", "bg-body-secondary", "fw-bold");
  ph.innerText = "PH: ";
  detailsList.append(ph);

  const phSpan = document.createElement("span");
  phSpan.classList.add("fw-normal");
  phSpan.innerText = beer.ph;
  ph.append(phSpan);

  const hops = document.createElement("li");
  hops.classList.add("list-group-item", "bg-body-secondary", "fw-bold");
  hops.innerText = "Number of hops: ";
  detailsList.append(hops);

  const hopsNumber = document.createElement("span");
  hopsNumber.classList.add("fw-normal");
  hopsNumber.innerText = beer.ingredients.hops.length;
  hops.append(hopsNumber);

  const malts = document.createElement("li");
  malts.classList.add("list-group-item", "bg-body-secondary", "fw-bold");
  malts.innerText = "Number of malts: ";
  detailsList.append(malts);

  const maltsNumber = document.createElement("span");
  maltsNumber.classList.add("fw-normal");
  maltsNumber.innerText = beer.ingredients.malt.length;
  malts.append(maltsNumber);

  const firstBrewed = document.createElement("li");
  firstBrewed.classList.add("list-group-item", "bg-body-secondary", "fw-bold");
  firstBrewed.innerText = "First brewed: ";
  detailsList.append(firstBrewed);

  const firstBrewedSpan = document.createElement("span");
  firstBrewedSpan.classList.add("fw-normal");
  firstBrewedSpan.innerText = beer.first_brewed;
  firstBrewed.append(firstBrewedSpan);

  const foodPairing = document.createElement("li");
  foodPairing.classList.add("list-group-item", "bg-body-secondary", "fw-bold");
  foodPairing.innerText = "Works well with: ";
  detailsList.append(foodPairing);

  const foodPairingItem = document.createElement("span");
  foodPairingItem.classList.add("fw-normal");
  foodPairingItem.innerText = beer.food_pairing.join(" , ");
  foodPairing.append(foodPairingItem);

  parentElement.append(container);
}
