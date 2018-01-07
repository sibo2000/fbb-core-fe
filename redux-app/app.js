const express = require('express');
const app = express();
const port = process.env.PORT || '8080';

// Ports and DB
app.set('port', port);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    next();
});

app.use(express.static("public/build"));

app.listen(port, () => console.log(`App running on localhost:${port}`));