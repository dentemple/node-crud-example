import { Request, Response } from "express";
import Beverages from "../models";

export default function createBeverage(req: Request, res: Response): void {
  /* whitelist */
  const {
    name,
    container_units,
    custom_order,
    price_per_unit,
    size,
    size_measurement,
    special_offer
  } = req.body;

  const properties = {
    name,
    container_units,
    custom_order,
    price_per_unit,
    size,
    size_measurement,
    special_offer
  };

  Beverages.create(properties, (err: any, document: any) => {
    if (err || !document) {
      return res.status(400).end({ err, document });
    }

    return res.status(200).send(document);
  });
}
