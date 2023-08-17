class CRUDViewController
{
  constructor(view, model)
  {
    this.innerView = view;
    this.innerModel = model;

    this.innerView.createButton.addEventListener("click", (event) => {
       event.preventDefault();
       this.oncreatebuttonclick();
     }
    );


    this.innerView.result.addEventListener("click", (event) => {
      const target = event.target;

      if (target.tagName.toLowerCase() === "button") {
        const row = target.closest("tr");
        
        if (target.classList.contains("deleteButton")) {
          this.onDeleteButtonClick(row);
          //row.remove();
        } 
        else if (target.classList.contains("updateButton")) {
          this.onUpdateButtonClick(row)
        } 
        else if (target.classList.contains("saveButton")) {
          this.onSaveButtonClick(row)
        }

      }
    }

   );


  }

  oncreatebuttonclick()
  {   
    let dataFromView = this.innerView.getDataInput();
    this.innerModel.create(dataFromView);   
  }

  onDeleteButtonClick(row)
  {
    console.log("borrar");
    row.remove();
  }

  onUpdateButtonClick(row)
  {
    console.log("actualizar");    
    const cells = row.cells;
    const contenidoCelda1 = cells[0].textContent;
    const contenidoCelda2 = cells[1].textContent;
    // const contenidoCelda3 = cells[2].textContent;

      cells[0].innerHTML = `<input type="text" value="${contenidoCelda1}" class="inputUpdate" >`;
      cells[1].innerHTML = `<input type="text" value="${contenidoCelda2}" class="inputUpdate" >`;
      cells[2].innerHTML = `<select id="categoria" required >
                              <option value="Amigos">Amigos</option>
                              <option value="Trabajo">Trabajo</option>
                              <option value="Estudio">Estudio</option>
                              <option value="Familia">Familia</option>
                              <option value="Favoritos">Favoritos</option>
                              <option value="Servicios">Servicios</option>
                            </select>`;

      cells[3].innerHTML = `<button class="saveButton"></button>`;

  }

  onSaveButtonClick(row)
  {
    const cells = row.cells;
      const nuevoContenidoCelda1 = cells[0].querySelector("input").value;
      const nuevoContenidoCelda2 = cells[1].querySelector("input").value;
      const nuevoContenidoCelda3 = cells[2].querySelector("select").value;

      cells[0].innerHTML = nuevoContenidoCelda1;
      cells[0].classList.add("category");
      cells[1].innerHTML = nuevoContenidoCelda2;
      cells[2].innerHTML = nuevoContenidoCelda3;
      cells[2].classList.add("category");

    switch(nuevoContenidoCelda3){
      case "Amigos":
        cells[2].classList.add("friends");
        break;
      case "Trabajo":
        cells[2].classList.add("jobs");
        break;

      case "Estudio":
        cells[2].classList.add("study");
        break;

      case "Familia":
        cells[2].classList.add("family");
        break;
      
      case "Favoritos":
        cells[2].classList.add("favorite");
        break;
      
      case "Servicios":
        cells[2].classList.add("service");
        break;

    }

      cells[3].innerHTML = `
        <button class="deleteButton"></button>
        <button class="updateButton"></button>
      `;
  }
}

export {CRUDViewController};