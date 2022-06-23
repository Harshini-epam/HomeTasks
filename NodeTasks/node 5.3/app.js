const express = require("express");
const router = require('./RouteController').router;
const users  = require("./UserDetails/Users").users;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/', router);
app.use((err,req,res) =>{ //Error handling
    if(err){
      
        res.json({msg:`error encountered : ${err.message}`});
        res.statusCode = 500;

    }
});

app.listen(PORT,(req,res) =>{
    
    console.log(`The Express Server is running on port:${PORT}.can access by visiting http://localhost:${PORT}`);
});



