const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getCompanys,
  getCompany,
  postCompany,
  putCompany,
  deleteCompany,
} = require("../controllers/company.controllers");

const companyRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Users name
 *         business_name:
 *           type: string
 *           description: Name as a company
 *         vat:
 *           type: string
 *           description: Number of vat 
 *         direcction:
 *           type: string
 *           description: Description of company
 *         country:
 *           type: string
 *           description: Location of company
 *         logo:
 *            type: string
 *            description: Logo
 *         numberEmployes:
 *            type: number
 *            description: Number of employes
 *         specialization:
 *             type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: Users jobs
 *         id_user:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: id of user
 *         id_advertisement:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: id of worker
 *       required:
 *         - name
 *         - business_name
 *         - vat
 *         - direcction
 *         - country
 *         - logo
 *         - numberEmployes
 *         - specialization
 *         - id_user
 *         - id_advertisement
 *       example:
 *             name: UpgradeHub
 *             business_name: UpgradeHub SRL
 *             vat: yu23fgyu123f4345
 *             direcction:  calle oso 13 Madrid 
 *             country: Spain
 *             logo: img_1
 *             numberEmployes: 50-200
 *             specialization: []
 *             id_user: tdrfghsrthur6hu56
 *             id_advertisement: []
 */

companyRoutes.get("/", getCompanys);
companyRoutes.get("/:id", [isAuth], getCompany);
companyRoutes.post("/", [isCompany], postCompany);
companyRoutes.put("/:id", [isCompany], putCompany);
companyRoutes.delete("/:id", [isCompany], deleteCompany);

module.exports = companyRoutes;
