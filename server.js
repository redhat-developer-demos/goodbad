const express = require('express');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const app = express();
const port = 3000;

emitter.on('error', (err) => {
    console.error('ERROR:', err.message);
});

app.get('/random', (req, res) => {
    const thresholdNumber = 50;
    const randomNumber = Math.floor(Math.random() * 101);

    console.log(`Random Number: ${randomNumber}`);

    try {
        if (randomNumber > thresholdNumber) {
            emitter.emit('error', new Error(`Generated number ${randomNumber} is greater than threshold of ${thresholdNumber}`));
            console.error();
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        } else {
            res.json({ randomNumber });
        }
    } catch (error) {
        console.error();
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    };
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
