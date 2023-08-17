const http = require('http');
const url = require('url');
const { modelServer } = require('./model/model.js');
let hostname = 'localhost'
let PORT = 3000 

function processRequire(req, res){
    //CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if (req.method === "OPTIONS") {
        res.writeHead(204).end();
    } 
    else if (req.method === "POST"){

        let body= "";
        req.on('data', (chunk) => {
            body += chunk;
        })
        .on('end', () =>  {
            let modelEvaluate = new modelServer();
            let result = modelEvaluate.calculate(body);

            const data = {message: result};

            res.writeHead(200, {
                "Content-Type": "text/plain",
                "Access-Control-Allow-Origin": "*",
                });
            res.end(JSON.stringify(data));

            console.log('POST method');
        });
    
    }
    else if (req.method === "GET"){

        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query;
        //const path = parsedUrl.pathname; (URL/<<nombrederecurso>>?... ) "/quericocho" en mi ejemplo

        let expression = query.expression.trim();
        expression = expression.replace(/^0+(?=\d)/, ""); 
        //cuando un numero empieza con 0, lo toma en base 8 y tira error, por eso le quitamos los ceros delanteros
    
        let modelEvaluate = new modelServer();
        let result = modelEvaluate.calculate(expression);
        
        const data = {message: result}

        res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        });
        res.end(JSON.stringify(data));

        console.log('GET method');
    }    
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Eror 404. Ruta no encontrada");
    }
  
}

// const server = http.createServer(processRequire);
const server = http.createServer((req, res) => {
    processRequire(req, res);
  });
  
server.listen(PORT, hostname, () => {
    console.log('Server running at http://localhost:3000/');
  });
  


