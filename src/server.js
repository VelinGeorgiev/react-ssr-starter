import http from 'http'
import { renderToPipeableStream } from 'react-dom/server'
import App from './components/app'
import { createReadStream } from 'fs'

const router = require('find-my-way')({
    ignoreTrailingSlash: true,
    ignoreDuplicateSlashes: true,
    defaultRoute: (req, res) => {
        res.statusCode = 404
        res.end()
    }
})

router.on('GET', '/', (req, res, params) => {
    const { pipe } = renderToPipeableStream(<App />, {
        bootstrapScripts: ['/main.js'],
        onShellReady() {
            res.setHeader('content-type', 'text/html');
            pipe(res)
        }
    })
})

router.on('GET', '/main.js', (req, res, params) => {

    let filePath = '/Users/velingeorgiev/Documents/afk/ice2/dist/public/main.js'
    const readableStream = createReadStream(filePath)

    res.writeHead(200, {
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/javascript',
    })

    readableStream.on('error', error => {
        console.log(`error: ${error.message}`)
        return res.end()
    })

    readableStream.on('data', chunk => {
        res.write(chunk)
        console.log(chunk);
    })

    readableStream.on('end', chunk => {
        console.log('End triggered')
        res.end()
    })
})

router.on('GET', '/ping', (req, res, params) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('x-app', 'ice2')
    res.end('{"message":"hello world 123"}')
})

const server = http.createServer((req, res) => {
    router.lookup(req, res)
})

server.listen(3000, err => {
    if (err) throw err
    console.log('Server listening on: http://localhost:3000')
})