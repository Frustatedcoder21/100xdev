const express = require('express');
const app = express();

const user = [
    {
        name: 'John',
        kidneys: [
            { healthy: true }
        ]
    }
];

app.use(express.json());

app.get('/', function(req, res) {
    const johnKidneys = user[0].kidneys;
    const no_of_kidneys = johnKidneys.length;
    let healthy_kidneys = 0;

    for (let i = 0; i < no_of_kidneys; i++) {
        if (johnKidneys[i].healthy) {
            healthy_kidneys++;
        }
    }

    let unhealthy_kidneys = no_of_kidneys - healthy_kidneys;

    res.json({
        no_of_kidneys,
        healthy_kidneys,
        unhealthy_kidneys
    });
});

app.post('/', function(req, res) {
    const isHealthy = req.body.ishealthy;

    user[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: 'Done!'
    });
});

app.put('/', function(req, res) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;  // Update the healthy status
    }
    res.json({
        msg: 'All kidneys updated to healthy.'
    });
});

app.delete('/', function(req, res) {
    const newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (user[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    user[0].kidneys = newKidneys;
    res.json({ msg: 'Unhealthy kidneys removed.' });
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
