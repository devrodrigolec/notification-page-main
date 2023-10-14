import structure from "./index.html/?raw";

/**
 *
 * @param {HTMLElement} element
 */
export const App = (element) => {
  element.innerHTML = structure;
};
