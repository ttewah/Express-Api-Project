const cors = require('cors');
const express = require('express');
//const dataAccess = require('./data-access');

const PORT = 5153;
const app = express();

var corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.get('/message', cors(corsOptions), async (req, res) => { 
     res.send('Hello World.')
});

app.listen(PORT, () => {
    console.log(`Express API is running on port: ${PORT}`);
});

//THUNDER CLIENT REQUEST FOR THIS END POINT IS...BELOW
// http://localhost:5153/message