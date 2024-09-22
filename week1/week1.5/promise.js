const fs = require('fs');

function read() {
    console.log("Inside the function");
    return new Promise(function (resolve) {
        console.log("Reading file");
        fs.readFile("a.txt", "utf-8", function (err, data) {
            if (err) {
                console.error("Error reading file", err);
                return;
            }
            console.log("Before resolve");
            resolve(data);
        });
    });
}

function onDone(data) {
    console.log(data);
}

read().then(onDone);
