import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import { upDateDisplay } from "./timer.js";
import state from "./state.js";


export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key); /*para aceitar somente números */
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    upDateDisplay();
    el.minutes.removeAttribute("contenteditable");
  })


}