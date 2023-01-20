const router = require("express").Router();
const { Topic, Card, User } = require("../db/models");
const Page = require("../view/Page");

router.get("/", async (req, res) => {
  res.renderComponent(Page, { title: "Question page" });
});

module.exports = router;
