import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
    const init = () => {
      model.getPersonData().then((data) => {
      const arr = data.results;
      const tmp = view.renderPerson(arr);
      const cards = document.querySelector(view.domStr.cards);
      view.render(cards, tmp);
      })
    }
    return {
      init,
    };
  })(Model, View);