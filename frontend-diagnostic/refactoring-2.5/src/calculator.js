import { model } from './model/model.js';
import { view } from './view/view.js';
import { controller } from './controller/controller.js';

class calculator
{
    constructor (){
        this.view = new view();
        this.model = new model();
        this.controller = new controller(this.view,this.model);
    }
}

export {calculator};

