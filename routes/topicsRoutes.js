const router = require("express").Router();
const Topics = require("../view/Topics");
const { Topic, Card, User } = require("../db/models");
const Cards = require("../view/Card");

router.get("/", async (req, res) => {
  let user;
  let name;
  if (req.session.user_id) {
    user = await User.findOne({ where: req.session.user_id });
    name = user.login;
    const curUser = req.session.user_id;
  }
  try {
    const topicsDB = await Topic.findAll();
    res.renderComponent(Topics, { tittle: "Topics page", topicsDB, name });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get('/:id', async (req, res) =>  {
    // console.log(req.params)
    const findTopic = await Card.findAll({where: {topic_id: req.params.id}})
    console.log(findTopic)
    res.renderComponent(Cards, {tittle: `Card page`, findTopic})
})

router.post('/', async (req, res) => {
    const {answer, id} = req.body





    const ans = await Card.findOne({where: {id}})
    console.log(ans.answer)
    if(ans.answer.toLowerCase() === answer.toLowerCase())  {
        
        res.json({message: 'ok'})
    }
    else{
        res.json({message: 'not ok', answerCor: ans.answer})
    }
})

module.exports = router;