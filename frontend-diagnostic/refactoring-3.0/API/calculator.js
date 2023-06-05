import { modelFront } from './frontend/src/model/model.js';
import { view } from './frontend/src/view/view.js';
import { controller } from './frontend/src/controller/controller.js';

class calculator
{
    constructor (){
        this.view = new view();
        this.model = new modelFront();
        this.controller = new controller(this.view,this.model);
    }
}

 export {calculator};

