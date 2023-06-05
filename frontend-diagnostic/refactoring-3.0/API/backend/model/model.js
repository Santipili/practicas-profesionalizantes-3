class modelServer{
    constructor(){        
    }
  
    calculate(expresion){
        return eval(expresion);
    }
};

module.exports = { modelServer: modelServer };
// export {modelServer}; "esto no me lo permitia hacer"