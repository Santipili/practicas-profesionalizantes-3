import { calculator } from "./API/calculator.js";
import {calculatorStyle} from './frontend/view/style.js';

function startApp() {

    let myCalculator = new calculator();
    let style = new calculatorStyle();

   document.body.appendChild(myCalculator);
   document.head.appendChild(style);

}

 window.addEventListener('load', startApp);