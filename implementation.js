"use strict";

const constructAddress = (address) => {
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

exports.set = (req, res) => {
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
};
