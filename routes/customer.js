const router = require("express").Router();
const customerController = require('../controllers/customerController');

router.post("/", customerController.customer_create);
router.get("/", customerController.customer_all);
router.get("/:customerId", customerController.customer_details);
router.put("/:customerId", customerController.customer_update);
router.delete("/:customerId", customerController.customer_delete);

module.exports = router;
