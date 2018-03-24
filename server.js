const restify = require('restify');
const errors = require('restify-errors');
// const validator = require('./validator');
const port = process.env.PORT || 8080;  //set port to 8080

// const schema = require('./validation-schema');
const server = restify.createServer(); //create a server
server.use(restify.plugins.bodyParser())
server.use((req,res,next)=>{
    try {
        var str1 = JSON.stringify(req.body);
        JSON.parse(str1);
        next();
    }
    catch(e) {
        next(new errors.BadRequestError("Could not decode request: JSON parsing failed!"));
    }
})
server.post('/', (req, res, next) => {
    if (!req.body.hasOwnProperty('payload')) {
        res.send(new errors.BadRequestError('No PayLoad record!'));
      } 
    for(var p of req.body.payload) {
    if (!p.hasOwnProperty('address')) {
        res.send(new errors.BadRequestError('Address is missing!'))
    } else if (!p.address.hasOwnProperty('buildingNumber') &&
               !p.address.hasOwnProperty('lat') &&
               !p.address.hasOwnProperty('lon') &&
               !p.address.hasOwnProperty('postcode') &&
               !p.address.hasOwnProperty('state') &&
               !p.address.hasOwnProperty('street') &&
               !p.address.hasOwnProperty('suburb')
            ) {
        res.send(new errors.BadRequestError('Address detail is missing!'))
    } else if (
        !p.hasOwnProperty('propertyTypeId') &&
        !p.hasOwnProperty('readyState') &&
        !p.hasOwnProperty('reference') &&
        !p.hasOwnProperty('shortId') &&
        !p.hasOwnProperty('status') &&
        !p.hasOwnProperty('type') &&
        !p.hasOwnProperty('workflow')
    ) {
        res.send(new errors.BadRequestError('PayLoad record is missing3'));
    }else{
        const payloadItems = req.body.payload;
        const response = payloadItems.reduce((arr, item) => {
            const obj = {};
            const concataddress = constructAddress(item.address);
            const newObj = Object.assign(obj, {concataddress}, {type: item.type, workflow: item.workflow});
            return arr.concat(newObj);
        }, []);
        res.json({
            "response": response
        });
    }}
});
server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});


const constructAddress = (address = {}) => {
    if (
        address.hasOwnProperty('buildingNumber') &&
        address.hasOwnProperty('street') &&
        address.hasOwnProperty('suburb') &&
        address.hasOwnProperty('state') &&
        address.hasOwnProperty('postcode')
    ) {
        return address['buildingNumber'] + ' ' + address['street'] + ' ' + address[ 'suburb'] + ' ' + address["state"] + ' ' + address["postcode"];
    }

    return '';
};
