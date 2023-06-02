import { modelFront } from './model/model.js';
import { view } from './view/view.js';
import { controller } from './controller/controller.js';

class calculator
{
    constructor (){
        this.view = new view();
        this.model = new modelFront();
        this.controller = new controller(this.view,this.model);
    }
}

 export {calculator};

