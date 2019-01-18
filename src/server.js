var express = require('express');
var path = require('path');
var React = require("react");
var {renderToString} = require("react-dom/server");
import Card from "./cards/card";
import Index from "./cards/cards";

console.log(Card);

var app = express();
app.listen(3400, function()
{console.log(`Server is listening on port 3400`)})


app.use( express.static( path.resolve( __dirname, "../dist" ) ) );


app.get("/", (req, res) => {
    res.writeHead( 200, { "Content-Type": "text/html" } );

	var content = renderToString((<Index cards={[{"title":"Nothing here", "content": "None.", status: 1}]} />));

	var body = htmlTemplate(content);
	
    res.end(body);
	
    console.log("They're here");
});


function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>*Mongo, Express, React, Node</title>
            <link rel="stylesheet" type="text/css" href="/css/style.css">
        </head>
        
        <body>
            <div id="index">${ reactDom }</div>
            <script src="./main.js"></script>
        </body>
        </html>
    `;
}


module.exports = app;