import { calculator } from "./calculator.js";


function startApp() {

    let myCalculator = new calculator();

   document.body.appendChild(myCalculator.view.container);
}

 window.addEventListener('load', startApp);