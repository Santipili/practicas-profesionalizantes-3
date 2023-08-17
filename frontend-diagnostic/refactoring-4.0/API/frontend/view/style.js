

class calculatorStyle 
{
    constructor(){
        

        this.style = document.createElement('style');

        style.innerText =
		`.calculator {
            background-color: #333;
            width:300px;
            height: fit-content;
            padding: 5px 5px;
            margin:  auto;
        }
        
        .display {
            display:block;
            width: 280px;
            height: 25px;
            background-color: #fff;
            text-align: right;
            padding: 5px;
            font-size: 25px;
            margin: auto;
            border-radius: 2px;
            border-color: #BEBEBE;
            border-width: 1px;
          }
        
          .text_to_display {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
            padding: 10px; 
        }
        
          .button_classic {
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px;
            font-size: 20px;
            cursor: pointer;
          }
        
          .number {
            background-color: #4286f4;
            box-shadow: 0px 5px #296cd7;
          }
          
          .operation {
            background-color: #3dc84d;
            box-shadow: 0px 5px #289d3c;
          }
        
          .equal {
            background-color: #EBE011;
            box-shadow: 0px 5px #EBC11C;
          }
          
          .clear {
            background-color: #e64c4c;
            box-shadow: 0px 5px #c63b3b;
            width:290px;
            margin: 5px ;
          }
          
         .button_classic:active{
            transform: translateY(2px);
          }`;
          
          this.appendChild(this.style);
    }
    
}

export {calculatorStyle};



// <link rel="stylesheet" type="text/css" href="./API/frontend/style/style.css"></link>