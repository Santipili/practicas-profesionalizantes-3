const http = require('http');
let hostname = 'localhost'
let PORT = 3000 

const url = require('url');
 const { modelServer } = require('./model/model.js');



function processRequire(req, res){
    
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.end();
    } else if (path === "/evaluate") {
        // let expression = query.expression.trim();
        // expression = expression.replace(/^0+(?=\d)/, "");
        let expression = query.expression;

        let model = new modelServer();
        let result = model.calculate(expression.toString());

        res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        });
        res.end(result.toString());
    } else {
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
  



// http.createServer(processRequire).listen(PORT,hostname, () => {
//     console.log('Server running at http://localhost:3000/');
// });

// http.createServer((req, res) =>{res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!');} )

