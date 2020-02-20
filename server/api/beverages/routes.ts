/**
 * Routes for "{...}/beverages"
 */

import express from "express";
import {
  createBeverage,
  deleteBeverage,
  getAllBeverages,
  getBeverageById,
  modifyBeverage
} from "../beverages/controllers";

const router = express.Router();

/* test */
router.get("/ping", (_, res) => res.send("ok"));

/* create */
router.post("/", createBeverage);

/* read/all */
router.get("/", getAllBeverages);

/* read/single */
router.get("/:id", getBeverageById);

/* update/partial */
router.patch("/:id", modifyBeverage);

/* delete */
router.delete("/:id", deleteBeverage);

export default router;
