import { Request, Response } from "express";
import Beverages from "../models";

export default function modifyBeverage(req: Request, res: Response): void {
  const { id } = req.params;

  /* whitelist */
  const {
    name,
    container_units,
    price_per_unit,
    size,
    size_measurement,
    special_offer
  } = req.body;

  const properties = {
    name,
    container_units,
    price_per_unit,
    size,
    size_measurement,
    special_offer
  };

  console.log("body:", req.body);

  Beverages.findOneAndUpdate(
    { _id: id },
    { $set: properties },
    {},
    (err, document) => {
      console.log({ properties });
      console.log({ document });
      if (err || !document) {
        return res.status(400).end({ err, document });
      }

      return res.status(200).send(document);
    }
  );
}
