const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});




app.post('/submit', (req, res) => {
    const message = req.body.msg;
    console.log(`Received message: ${message}`);
    res.send(`You submitted: ${message}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

