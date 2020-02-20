import { Request, Response } from "express";
import Beverages from "../models";

export default function getBeverageById(req: Request, res: Response): void {
  const { id } = req.params;

  Beverages.findById(id, (err, document) => {
    if (err || !document) {
      return res.status(400).end({ err, document });
    }

    return res.status(200).send(document);
  });
}
