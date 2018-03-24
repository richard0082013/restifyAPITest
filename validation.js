"use strict";

const errors = require("restify-errors");

exports.set = (req, res, next) => {
  if (!req.body.hasOwnProperty("payload")) {
    return res.send(new errors.BadRequestError("No PayLoad record!"));
  }
  for (var p of req.body.payload) {
    if (!p.hasOwnProperty("address")) {
      return res.send(new errors.BadRequestError("Address is missing!"));
    }
    if (
      !p.address.hasOwnProperty("buildingNumber") &&
      !p.address.hasOwnProperty("lat") &&
      !p.address.hasOwnProperty("lon") &&
      !p.address.hasOwnProperty("postcode") &&
      !p.address.hasOwnProperty("state") &&
      !p.address.hasOwnProperty("street") &&
      !p.address.hasOwnProperty("suburb")
    ) {
      return res.send(new errors.BadRequestError("Address detail is missing!"));
    }
    if (
      !p.hasOwnProperty("propertyTypeId") &&
      !p.hasOwnProperty("readyState") &&
      !p.hasOwnProperty("reference") &&
      !p.hasOwnProperty("shortId") &&
      !p.hasOwnProperty("status") &&
      !p.hasOwnProperty("type") &&
      !p.hasOwnProperty("workflow")
    ) {
      return res.send(new errors.BadRequestError("PayLoad record is missing3"));
    }
  }
  next();
};
