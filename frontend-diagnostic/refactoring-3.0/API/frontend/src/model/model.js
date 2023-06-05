class modelFront{
    constructor(){  
          
    }
  
    async calculate(expresion){

        try{
            let DataTransfer ={
                method:"POST",
                body: expresion
            }
    
            let response = await fetch('http://localhost:3000/', DataTransfer );
    
            let responseJSON = await response.json();

            return responseJSON
        }
        catch(error){
            console.log(error);
        }

    }

    async calculate2(expression){
         
        try{          
        
            if (expression != null && expression !== "") {
                const url = `http://localhost:3000/quericocho?expression=${encodeURIComponent(expression)}` ;
        
                let response = await fetch( url, {method:"GET"} );
        
                let responseJSON = await response.json();

                return responseJSON;
            }
            else {
                alert("error you can't evaluate empty data");
            }  
        }
        catch(error){
            console.log(error);
        }

    }
}

export {modelFront};