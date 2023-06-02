class modelFront{
    constructor(){  
          
    }
   
  
    calculate(expresion){
        
        let DataTransfer ={
            method:"POST",
            body: JSON.stringfy()
        }
        fetch('http://localhost:3000/',DataTransfer)
        .then((response) =>{
            response.JSON();
        })
        .then((response) =>{
            console.log(response);
        })
        .catch(error => console.log(error));


    }
};

export {modelFront};