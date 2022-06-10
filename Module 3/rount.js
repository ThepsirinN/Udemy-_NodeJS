const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url === "/"){
        res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Test</title>
    </head>
    <body>
        <form action="message" method="post">
            <input type="text" name="message">
            <button type="submit">Send</button>
        </form>
    </body>
    </html>
    `)
    // return toquit arrow function not run below
    return res.end()
    }
    
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data',(chunk) => {
            body.push(chunk)
            //console.log(chunk)
            //console.log(`chunk = ${chunk}`)
            //console.log(body)
            //console.log(`body = ${body}`)
        })
        // place return before req on to faster in event loop and not call under command
        return req.on('end', () =>{
            // buffer bus stop
            const parseBody = Buffer.concat(body).toString()
            //console.log(parseBody)
            //console.log(`parsebody = ${parseBody}`)
            const message = parseBody.split("=")[1]
            //console.log(message)
            // fs.writeFileSync('message.txt',message)
            // without sync it will run in async
            fs.writeFile('message.txt',message, err =>{
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
        /* res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end() */
    }
    res.setHeader('Content-Type', 'text/html')
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thepsirin Nawngerndee</title>
    </head>
    <body>
        <h2>Thepsirin Nawngerndee</h2>
    </body>
    </html>
    `)
    res.end()
}

module.exports = requestHandler