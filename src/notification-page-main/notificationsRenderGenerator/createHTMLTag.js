/**
 * This function create a HTML element, add style class and add content if exist.
 * @param {HTMLElement} HTMLTag Example: 'div'
 * @param {String} classToAdd Example: 'single-notification'
 * @param {String} HTMLcontent Exmple: 'reacted to your recent post'
 * @returns {elementHTML}
 */
export const createHTMLTag = (HTMLTag, classToAdd, HTMLcontent = "") => {
  const elementHTML = document.createElement(HTMLTag);
  elementHTML.classList.add(classToAdd);

  if (HTMLcontent != "") {
    elementHTML.textContent = HTMLcontent;
  }
  return elementHTML;
};
