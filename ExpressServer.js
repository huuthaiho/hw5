var express = require('express');
var axios = require('axios');
var {from} = require('rxjs');
var port = 1111;
var app = express();
const datatestLink = 'https://randomuser.me/api/?results=10';
app.set('strict routing', true);
app.enable('case sensitive routing');
app.set('trust proxy', true);
app.enable('strict proxy');
var oneDay = 86400000;
app.use(express.static(__dirname, {
    maxAge: oneDay
}));

//******************Using promise
// app.get('/users', function(req, res) {  
    
//       axios.get(datatestLink).then(respone => {
//          res.send(respone.data);
//          res.end();
//       })
    
//  })

//***************** */Asyn - Await
 app.get('/users', function(request, response) {  
    var getData = async function(response)  {
         await axios.get(datatestLink).then(res => {            
    
           response.send(res.data);
             response.end();
         })
     };
     getData(response);   
    
})

//***************Using observable

//  app.get('/users', function(req, res) {    
//     var promise = axios.get(datatestLink);
//     from(promise).subscribe(respone => {
//         res.send(respone.data);
//         res.end();
//      })    
//  })

app.listen(port, function(){
    console.log('Server started at Port :', port);
})