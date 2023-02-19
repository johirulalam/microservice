 //const fs = require('fs');
// fs.readFile('./docs/text.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./docs/blog.txt', 'hello world', () => {
//     console.log('file was written');
// });

// const fs = require('fs');
// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.setHeader('Content-Type', 'text/html');
//     fs.readFile('./index.html', (err, data) => {
//         if(err){
//             console.log(err);
//             res.end();
//         }else{
//             res.write(data);
//             res.write(data);
//             res.end();
//         }
//     })
// })

// server.listen(3000, 'localhost', ()=>{
//     console.log('node server is run in port 3000');

// })