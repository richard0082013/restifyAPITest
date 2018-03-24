const restify = require('restify');
const errors = require('restify-errors');
const validation = require('./validation'); // validation handler
const implementation = require('./implementation'); // data implementation handler
const port = process.env.PORT || 8080;  //set port to 8080

const server = restify.createServer(); //create a server
server.use(restify.plugins.bodyParser()); // apply body parser middleware
server.use((err,req,res,next)=> {  // customize the error message if the body parser return an invalid  json
    if(err) {
        console.log('error', err)
        return (res.send(new errors.BadRequestError("Could not decode request: JSON parsing failed!")));
    }else {
        next();
    }
})
server.post('/', validation.set, implementation.set);

server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});



