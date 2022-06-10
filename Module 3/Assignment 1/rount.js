const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    let title = "another"
    let head = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> `
    let title_h = `<title>${title}</title></head>`

    console.log("sever run on localhost:3000")
    // Dont put res.write() here bcz it will generate [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

    if(url === "/"){
        let title = 'localhost:3000/'
        let title_h = `<title>${title}</title></head>`
        res.write(head)
        res.write(title_h)
        res.write(`<body>
            <h1>
                localhost:3000/
            </h1>
            <hr>
            <center>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Send</button>
                </form>
            </center>
        </body>
    </html>`)
        return res.end()
    }

    if(url === "/users"){
        let title = 'users'
        let title_h = `<title>${title}</title></head>`
        res.write(head)
        res.write(title_h)
        res.write(`<body>
            <ul>
                <li>user 1</li>
                <li>user 2</li>
                <li>user 3</li>
            </ul>
        </body>
    </html>`)
    return res.end()
    }

    if(url === "/create-user" && method === "POST"){
        const body = []
        req.on('data', (chunk) =>{
            body.push(chunk)
        })
        
        return req.on('end', () => {
            const ParseUnameBody = Buffer.concat(body).toString()
            const uname = ParseUnameBody.split("=")[1]
            console.log(uname)
            fs.writeFile('User.txt', uname, err =>{
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    res.write(head)
    res.write(title_h)
    res.write(`<body>
            <h1>
                localhost:3000/another
            </h1>
        </body>
    </html>`)
    res.end()
}

module.exports = requestHandler