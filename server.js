const restify = require('restify');
const errors = require('restify-errors');
const validation = require('./validation');
const implementation = require('./implementation');
const port = process.env.PORT || 8080;  //set port to 8080

// const schema = require('./validation-schema');
const server = restify.createServer(); //create a server
server.use(restify.plugins.bodyParser());
server.use((err,req,res,next)=> {
    if(err) {
        console.log('error', err)
        return (res.send(new errors.BadRequestError("Could not decode request: JSON parsing failed!")));
    }else {
        next();
    }
})
// server.use((req,res,next)=>{
//     console.log("comming?")
//     try {
//         var str1 = JSON.stringify(req.body);
//         JSON.parse(str1);
//         next();
//     }
//     catch(e) {
//         return (new errors.BadRequestError("Could not decode request: JSON parsing failed!"));
//     }
// })
server.post('/', validation.set, implementation.set);

server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});



