"use strict";

const errors = require("restify-errors");

exports.set = (req, res, next) => {
    console.log("input", req.body.payload)
  if (!req.body.hasOwnProperty("payload")) {
    next(res.send(new errors.BadRequestError("No PayLoad record!")));
  }
  req.body.payload.map((p) =>{
    console.log("children of payload", p.hasOwnProperty("shortId"))
    if (p.hasOwnProperty("address")===false) {
        next (res.send(new errors.BadRequestError("No address information in payload!")));
    }
    if(p.address.hasOwnProperty("buildingNumber")===false) {
        next (res.send(new errors.BadRequestError("No building number information in address!")));
    }
    if (p.address.hasOwnProperty("lat")===false) {
        next (res.send(new errors.BadRequestError("No lat information in address!")));
    }
    if (p.address.hasOwnProperty("lon")===false) {
        next (res.send(new errors.BadRequestError("No lon information in address!")));
    }
    if (p.address.hasOwnProperty("postcode")===false) {
        next (res.send(new errors.BadRequestError("No postcode information in address!")));
    }
    if (p.address.hasOwnProperty("state")===false) {
        next (res.send(new errors.BadRequestError("No state information in address!")));
    }
    if (p.address.hasOwnProperty("street")===false) {
        next (res.send(new errors.BadRequestError("No street information in address!")));
    }
    if (p.address.hasOwnProperty("suburb")===false) {
        next (res.send(new errors.BadRequestError("No suburb information in address!")));
    }
    if (p.hasOwnProperty("propertyTypeId")===false) {
        next (res.send(new errors.BadRequestError("No propertyTypeId information in payload!")));
    }
    if (p.hasOwnProperty("readyState")===false) {
        next (res.send(new errors.BadRequestError("No readyState information in payload!")));
    }
    if (p.hasOwnProperty("reference")===false) {
        next (res.send(new errors.BadRequestError("No reference information in payload!")));
    }
    if (p.hasOwnProperty("shortId")===false) {
        next (res.send(new errors.BadRequestError("No shortId information in payload!")));
    }
    if (p.hasOwnProperty("status")===false) {
        next (res.send(new errors.BadRequestError("No status information in payload!")));
    }
    if (p.hasOwnProperty("type")===false) {
        next (res.send(new errors.BadRequestError("No type information in payload!")));
    }
    if (p.hasOwnProperty("workflow")===false) {
        next (res.send(new errors.BadRequestError("No workflow information in payload!")));
    }
  })
  next();
};
