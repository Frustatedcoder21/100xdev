const express = require('express');

const app = express();

function sum(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

app.get('/', function(req, res) {
    const n = parseInt(req.query.n); // Convert query string to an integer
    if (isNaN(n)) {
        res.send('Please provide a valid number.');
    } else {
        const ans = sum(n);
        res.send('Your sum is ' + ans);
    }
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
