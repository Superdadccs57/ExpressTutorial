const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./about.html')
const pageNotFound = readFileSync('./404.html')

const server = http.createServer((req, res) =>{
    // console.log(req.url, req.method)
    const url = req.url;
    // Home Page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } 
    // About Page
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    } 
    // Page Not Found
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(pageNotFound)
        res.end()
    }
})
server.listen(5000)