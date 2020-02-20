import { Request, Response } from "express";
import Beverages from "../models";

export default function getAllBeverages(_: Request, res: Response): void {
  Beverages.find({}, (err, document) => {
    if (err || !document) {
      return res.status(400).end({ err, document });
    }

    return res.status(200).send(document);
  });
}
