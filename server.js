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
app.get('/*', (req, res) => {
    res.end('Hello World'); 
});

app.listen(8000,() => {
    console.log('Listening on port 8000');
});
