const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors")

router.use(cors())

router
  .route("/:corsId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .options(corsDelete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
