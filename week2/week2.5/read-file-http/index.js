const fs = require('fs');
const express = require('express');


const app = express();

app.get('/file/:filename', (req, res) => {
    const name=req.params.filename; // this read anything after /file/ , which means name=:filename
    console.log(name); //logs the filename
    fs.readFile(name,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else
        res.json({data})
    })
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
