const router = require("express").Router();

const Page = require("../view/Page");

router.get("/", (req, res) => {
  res.renderComponent(Page, { title: "Question page" });
});

module.exports = router;
