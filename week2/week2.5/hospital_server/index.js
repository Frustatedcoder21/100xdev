const express = require('express');
const app = express();

const users = [
    {
        name: 'John',
        kidneys: [
            { healthy: false },
            { healthy: false }
        ]
    },
    {
        name: 'John',
        kidneys: [
            { healthy: true },
            { healthy: false }
        ]
    }
];

let healthy_kidneys = 0;
let unhealthy_kidneys = 0;

for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].kidneys.length; j++) {
        if (users[i].kidneys[j].healthy) {
            healthy_kidneys++;
        } else {
            unhealthy_kidneys++;
        }
    }
}

app.get('/', function(req, res) {
    res.send((healthy_kidneys + unhealthy_kidneys).toString());
});

app.get('/healthy', function(req, res) {
    res.send(healthy_kidneys.toString());
});

app.get('/unhealthy', function(req, res) {
    res.send(unhealthy_kidneys.toString());
});

app.listen(5000, function() {
    console.log('Server is running on port 5000');
});
