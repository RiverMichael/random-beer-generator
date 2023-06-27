/**
 * Create and display a message
 * @param {*} parentElement The element to append the message to
 * @param {Array} messageType The classlists of the message
 * @param {string} messageText The text message to display
 * @returns Displays a message
 * @example
 * const container = documentquerySelector(".container");
 *
 * createMessage(container, ["border-danger", "text-danger"], "There was a problem loading the beer, please try again")
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(...messageType, "border", "border-2", "p-4", "text-center");
  message.innerText = messageText;

  parentElement.append(message);
}
