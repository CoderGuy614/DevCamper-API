const express = require("express");

const {
  getBootcamp,
  getBootcamps,
  getBootcampsInRadius,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
