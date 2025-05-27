const express = require('express');
const app = express();
const port = 3000;

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 101);
    
    console.log(`Random Number: ${randomNumber}`);

    if (randomNumber > 50) {
        console.log(`error: Generated number ${randomNumber} is greater than 50`);
        //return (`error: Generated number ${randomNumber} is greater than 50` );
        throw new Error(`error: Generated number ${randomNumber} is greater than 50`);
    }

    res.json({ randomNumber });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
