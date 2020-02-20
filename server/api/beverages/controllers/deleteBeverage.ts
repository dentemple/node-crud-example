import { Request, Response } from "express";
import Beverages from "../models";

export default function deleteBeverage(req: Request, res: Response): void {
  const { id } = req.params;

  Beverages.findOneAndRemove({ _id: id }, (err, document) => {
    if (err || !document) {
      return res.status(400).end({ err, document });
    }

    return res.status(200).send(document);
  });
}
