// This can be done using the HTTP method however it probably isn't best practice because of all the code that would be required for multiple resources.
const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const pageNotFound = readFileSync('./404.html')

const server = http.createServer((req, res) =>{
    // console.log(req.url, req.method)
    const url = req.url;
    console.log(url)
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
    // Styles
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }
    // Logo
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': ' image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // Logo
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    // 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(pageNotFound)
        res.end()
    }
})
server.listen(5000)