const express=require("express");
const hbs=require('hbs');


//https://www.facebook.com/Tu-kab-sudhrega-kaminey-193642660709138/?hc_ref=ARR-sz1a6FTIgGjyH3uNytK2jrtTNIn9T88R-YQadLzXD_BPeP1lwbh5YsA8K6gRhyA

var app= express()

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

app.use((req,res,next)=>{
    var now= new Date().toString();
    console.log(now+"/"+req.method);
    next();
})

app.get('/',(request,response)=>{
    console.log(request.headers);
    var data={
        name:"jobayer",
        address:{
            permanent:"Bogra,bangladesh",
            Temporary:"Wireless , Mohakhali,Dhaka"
        }
    }
    response.send(data);
});

app.get('/about',(req,res)=>{
    
    var data={
        name:"jobayer",
        address:{
            permanent:"Bogra,bangladesh",
            Temporary:"Wireless , Mohakhali,Dhaka"
        }
    }
    res.render('about.hbs',{data1:data});
});
app.post('/',(req,res)=>{
    res.send("Bad request");
});

app.listen( process.env.PORT,()=>{
    console.log("Server is up: "+process.env.PORT);
});