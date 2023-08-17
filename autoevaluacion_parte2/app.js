import { CRUDView} from './src/view.js';

function main()
{
  let appView = new CRUDView();
  document.body.appendChild(appView);
}

//window.onload = main;

window.addEventListener('load', main);