const http = require('http');

const server = http.createServer((req, res) => {

    // Set response type as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const response = {
        message: "Hello",
        dateTime: new Date()
    };

    // Convert object → JSON string
    res.end(JSON.stringify(response, null, 2 ));
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});