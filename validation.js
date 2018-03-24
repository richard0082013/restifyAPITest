"use strict";
/*
 this function will check the request body if there are some missing fields according to the sample
*/
const errors = require("restify-errors");

exports.set = (req, res, next) => {
  if (!req.body.hasOwnProperty("payload")) { //check req body has payload field, otherwise return new error
    return(res.send(new errors.BadRequestError("No PayLoad record!")));
  }
  req.body.payload.map((p) =>{
    if (p.hasOwnProperty("address")===false) { //check req body payload field has address field, otherwise return new error
        next (res.send(new errors.BadRequestError("No address information in payload!")));
        return;
    }
    if(p.address.hasOwnProperty("buildingNumber")===false) { //check req body payload address field has buildingNumber field, otherwise return new error
        next (res.send(new errors.BadRequestError("No building number information in address!")));
        return ;
    }
    if (p.address.hasOwnProperty("postcode")===false) { //check req body payload address field has postcode field, otherwise return new error
        next (res.send(new errors.BadRequestError("No postcode information in address!")));
        return ;
    }
    if (p.address.hasOwnProperty("state")===false) { //check req body payload address field has state field, otherwise return new error
        next (res.send(new errors.BadRequestError("No state information in address!")));
        return ;
    }
    if (p.address.hasOwnProperty("street")===false) { //check req body payload address field has street field, otherwise return new error
        next (res.send(new errors.BadRequestError("No street information in address!")));
        return ;
    }
    if (p.address.hasOwnProperty("suburb")===false) { //check req body payload address field has suburb field, otherwise return new error
        next (res.send(new errors.BadRequestError("No suburb information in address!")));
        return ;
    }
    if (p.hasOwnProperty("propertyTypeId")===false) { //check req body payload field has propertyTypeId field, otherwise return new error
        next (res.send(new errors.BadRequestError("No propertyTypeId information in payload!")));
        return ;
    }
    if (p.hasOwnProperty("readyState")===false) { //check req body payload field has readyState field, otherwise return new error
        next (res.send(new errors.BadRequestError("No readyState information in payload!")));
        return ;
    }
    if (p.hasOwnProperty("reference")===false) { //check req body payload field has reference field, otherwise return new error
        next (res.send(new errors.BadRequestError("No reference information in payload!")));
        return ;
    }
    if (p.hasOwnProperty("shortId")===false) { //check req body payload field has shortId field, otherwise return new error
        next(res.send(new errors.BadRequestError("No shortId information in payload!")));
        return ;
    }
    if (p.hasOwnProperty("status")===false) { //check req body payload field has status field, otherwise return new error
        next (res.send(new errors.BadRequestError("No status information in payload!")));
        return ;
    }
    if (p.hasOwnProperty("type")===false) { //check req body payload field has type field, otherwise return new error
        next (res.send(new errors.BadRequestError("No type information in payload!")));
        return ;
    }
    if (p.hasOwnProperty("workflow")===false) { //check req body payload field has workflow field, otherwise return new error
        next (res.send(new errors.BadRequestError("No workflow information in payload!")));
        return ;
    }
  })
  next();
};
