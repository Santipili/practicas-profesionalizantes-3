class CRUDModel
{
  constructor(viewReference)
  {
    this.innerView = viewReference;
    this.dataContainer = new Array();
  }

  create( data )
  {
    this.dataContainer.push( data );
    // console.log(this.dataContainer);

    this.innerView.resultBodyRow = this.innerView.resultBody.insertRow();

    let columnName = document.createElement('td');
    columnName.innerText = data.name;
    this.innerView.resultBodyRow.insertCell().appendChild( columnName );

    let columnPhone = document.createElement('td');
    columnPhone.innerText = data.phone;
    this.innerView.resultBodyRow.insertCell().appendChild( columnPhone );
    

    let columnCategory = document.createElement('td');
    columnCategory.innerText = data.category;
    columnCategory.classList.add("category");
     this.innerView.resultBodyRow.insertCell().appendChild( columnCategory );

  

    switch(data.category){
      case "Amigos":
        columnCategory.classList.add("friends");
        break;
      case "Trabajo":
        columnCategory.classList.add("jobs");
        break;

      case "Estudio":
        columnCategory.classList.add("study");
        break;

      case "Familia":
        columnCategory.classList.add("family");
        break;
      
      case "Favoritos":
        columnCategory.classList.add("favorite");
        break;
      
      case "Servicios":
        columnCategory.classList.add("service");
        break;

    }
       
    let columnActions = document.createElement('td');
    columnActions.classList.add("Actions");

    let deleteButton = document.createElement('button');
    deleteButton.style.backgroundImage = "url(./recycle-bin-2.png)";   
    deleteButton.classList.add("deleteButton");

    let updateButton = document.createElement('button');
    updateButton.style.backgroundImage = "url(./interface-edit-pen-tool.png)";   
    updateButton.classList.add("updateButton");

    columnActions.appendChild(deleteButton);
    columnActions.appendChild(updateButton);

    
    this.innerView.resultBodyRow.insertCell().appendChild( columnActions );

    this.innerView.nameInput.value = "";
    this.innerView.phoneInput.value = "";
    this.innerView.optionsInput.value = "";  
  }

  edit()
  {
    
  }

  delete()
  {
    //todo..
  }



}

export {CRUDModel};