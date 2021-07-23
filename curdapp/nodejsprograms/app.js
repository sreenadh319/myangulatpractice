var exp = require('express');
app = exp();
var fs = require('fs');
var bp = require('body-parser');
var cors = require('cors');
app.use(bp());
app.use(cors());
app.listen(1000);
var data = [];
var isFileExist = fs.existsSync("data.json");
if(isFileExist){
    let _data=fs.readFileSync("data.json").toString();
    if(_data.length > 2){
        data = JSON.parse(_data);
    }
}
app.get("/getdata",(req,res)=>{
    res.send(data);
})
app.post("/create",(req,res)=>{
    var id = Math.round(Math.random()*10000);
    var obj={id,name:req.body.name,city:req.body.city};
    data.push(obj);
    fs.writeFileSync("data.json",JSON.stringify(data));
    res.send({result:"success"});
})

app.post("/update",(req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    var city = req.body.city;
    data = data.map(x=>{
        if(x.id == id){
            x.name=name;
            x.city=city;
        }
        return x;
    });
    fs.writeFileSync("data.json",JSON.stringify(data));
    res.send({result:"success"});
})

app.post("/delete",(req,res)=>{
    var id = req.body.id;
    data = data.filter(x=>{
        return !(x.id == id);
    });
    fs.writeFileSync("data.json",JSON.stringify(data));
    res.send({result:"success"});
})