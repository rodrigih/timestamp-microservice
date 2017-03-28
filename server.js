var express = require('express');
var app  = express();

app.set('views','./views');
app.set('view engine','pug');

// Used for pug files when referencing CSS
app.use(express.static('./'));
app.use(express.static('./node_modules/bootstrap/dist/css/'));

// Index page
app.get('/',(req,res) =>{
    res.render('index.pug');
});


// Handle request
app.get('/:time', (req, res) => {
    var times = {};
    var date = new Date(req.params.time);

    if(isNaN(req.params.time)){
        date = new Date(req.params.time); 
    }else{
        date = new Date(parseInt(req.params.time)); 
    }

    if(isNaN(date.getTime()))
        res.status(400).end('Invalid date entered'); 

    
    times.unix = date.getTime();
    times.natural = date.toLocaleString('en-us',
        {month: 'long', year: 'numeric', day: 'numeric'});
    res.end(JSON.stringify(times)); 
});

app.listen(8000,() => {
    console.log('Listening on port 8000');
});
