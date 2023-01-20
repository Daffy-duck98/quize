const router = require('express').Router();
const Topics = require('../view/Topics');
const { Topic, Card } = require('../db/models');
const Cards = require('../view/Card');

router.get('/', async (req, res) =>  {
    try {
        const topicsDB = await Topic.findAll();
        res.renderComponent(Topics, {tittle: 'Topics page', topicsDB})
    }
    catch (e) {
        res.status(500).json(e.message);
      }
})

router.get('/:id', async (req, res) =>  {
    // console.log(req.params)
    const findTopic = await Card.findAll({where: {topic_id: req.params.id}})
    console.log(findTopic)
    res.renderComponent(Cards, {tittle: `Card page`, findTopic})
})

module.exports = router;