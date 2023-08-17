//este modelo deberia tener un solo metodo, pero por cuestiones de aprendizaje cree la peticion utilizando POST y GET

class modelFront{
    constructor(){  
          
    }
  
    //Metodo utilizando POST
    async calculateByPOST(expression){

        try{
            if (expression != null && expression !== "") {
                let DataTransfer ={
                    method:"POST",
                    body: expression
                }
        
                let response = await fetch('http://localhost:3000/', DataTransfer );
        
                let responseJSON = await response.json();
    
                return responseJSON
            }
            else {
                alert("ERROR!! You can't evaluate empty data");
            } 
        }
        catch(error){
            console.log(error);
        }

    }

    //metodo utilizando GET
    async calculateByGET(expression){
         
        try{          
            if (expression != null && expression !== "") {
                const url = `http://localhost:3000/quericocho?expression=${encodeURIComponent(expression)}` ;
        
                let response = await fetch( url, {method:"GET"} );
        
                let responseJSON = await response.json();

                return responseJSON;
            }
            else {
                alert("ERROR!! You can't evaluate empty data");
            }  
        }
        catch(error){
            console.log(error);
        }

    }
}

export {modelFront};