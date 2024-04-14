const fs = require('fs');
let temp;

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){

        res.write('<html>');
    
        res.write('<head><title>Enter Message</title><head>');
        
        res.write(`<body><h1>${temp}</h1><br><form action = "/message" method = "POST"><input type= "text" name = "message"><button type = "submit">Send</button></form></body>`);
        
        res.write('</html>');
    
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body=[];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsebody = Buffer.concat(body).toString();
            const msg = parsebody.split('=')[1];
            console.log(parsebody);
            fs.writeFileSync('message.txt',msg);
            temp = msg;
            
        })
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    
    }
    
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    
    res.write('<head><title>Welcome to my first Noe.js Project</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    
    res.end();


};

module.exports = requestHandler;