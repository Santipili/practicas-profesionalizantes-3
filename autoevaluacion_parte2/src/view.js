import { CRUDViewController } from './controller.js';
import { CRUDModel } from './model.js';

class CRUDView extends HTMLElement
{
  constructor()
  {
    super();
    this.container = document.createElement('section');
    this.container.classList.add('container');

    this.contentForm = document.createElement('div');
    this.contentForm.classList.add('formulario');

    this.form = document.createElement('form');
    this.form.id = 'myform'
    
    this.viewTitle = document.createElement('h2');
    this.viewTitle.innerText = 'Agenda';

    this.createButton = document.createElement('button');
    this.createButton.innerText = 'create';
    this.createButton.classList.add("create")

    this.nameInput = document.createElement('input');
    this.nameInput.type = 'text';
    this.nameInput.placeholder = 'apellido y nombre';
    this.nameInput.id = 'nombre';

    this.phoneInput = document.createElement('input');
    this.phoneInput.type = 'phonenumber';
    this.phoneInput.placeholder = '2235254045';
    this.phoneInput.id = 'telefono';

    this.optionsInput = document.createElement('select');
    this.optionsInput.classList.add('formulario');

    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
    const option5 = document.createElement("option");
    const option6 = document.createElement("option");

    option1.value = "Amigos";
    option1.text = "Amigos";

    option2.value = "Trabajo";
    option2.text = "Trabajo";

    option3.value = "Estudio";
    option3.text = "Estudio";

    option4.value = "Familia";
    option4.text = "Familia";

    option5.value = "Favoritos";
    option5.text = "Favoritos";

    option6.value = "Servicios";
    option6.text = "Servicios";

    this.optionsInput.add(option1, null);
    this.optionsInput.add(option2, null);
    this.optionsInput.add(option3, null);
    this.optionsInput.add(option4, null);
    this.optionsInput.add(option5, null);
    this.optionsInput.add(option6, null);


    this.result = document.createElement('table');
    this.resultHeader = this.result.createTHead();
    this.resultBody = this.result.createTBody();

    let columnTags = ['Nombre','Telefono','Category', ''];

    this.resultHeaderRow = this.resultHeader.insertRow();

    for( let tag of columnTags )
    {
      let columnElement = document.createElement('th');
      columnElement.innerText = tag;
      this.resultHeaderRow.insertCell().appendChild( columnElement );
    }

    this.contentTable= document.createElement('div');
    this.contentTable.classList.add('grilla');
    
    this.form.appendChild(this.viewTitle);
    this.form.appendChild(this.nameInput);
    this.form.appendChild(this.phoneInput);
    this.form.appendChild(this.optionsInput);
    this.form.appendChild(this.createButton);

    this.contentForm.appendChild(this.form)
   
    this.contentTable.appendChild(this.result);

    this.container.appendChild(this.contentForm);
    this.container.appendChild(this.contentTable);

    this.appendChild(this.container);   
    
    //-------------------------------------------------------------------------------
    //Controller
    this.innerModel = new CRUDModel(this);
    this.innerController = new CRUDViewController(this, this.innerModel );
  }
  
  connectedCallback()
  {
    
  }
  
  disconnectedCallback()
  {
    
  }
  
  getDataInput()
  {
    let data =
    {
      name: this.nameInput.value,
      phone: this.phoneInput.value,
      category: this.optionsInput.value
    }

    return data;
  }

  render( dataContainer )
  {
    //Fill table 
    //class/css style.
  }
}

customElements.define('x-crud', CRUDView);

export  {CRUDView};