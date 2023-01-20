'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const cards = [{ img:'https://www.ixbt.com/img/n1/news/2022/10/5/stepan_large.JPG', answer:'18',question:'Сколько всего у котиков пальцев?',cost:10,topic_id:1},
    { img:'https://image.jimcdn.com/app/cms/image/transf/none/path/s96950901fec517fe/image/i15afa3ee2c0261ef/version/1552482062/image.jpg', answer:'корниш-рекс',question:'Назови породу котика',cost:10,topic_id:1},
    { img:'https://static.wikia.nocookie.net/protagonist/images/4/4a/%D0%9A%D0%BE%D1%82_%D0%9B%D0%B5%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D0%B4.jpg/revision/latest?cb=20191008164449&path-prefix=ru', answer:'леопольд',question:'Как зовут кота из мультфильма, который предлагает жить дружно?',cost:10,topic_id:1},
    { img:'https://animals.moe-online.ru/media_new/1/8/4/4/5/4/2/078fd741e3e3fcb0c3eeb62e42fd5baf/HnGb70BYYE1YIbQtnq1jI01Eo56Th4KsVIMz87Uk-thumb_720.jpg', answer:'24',question:'Сколько у кошки усов?',cost:10,topic_id:1},
    { img:'https://avatars.mds.yandex.net/i?id=f615adf6e6f463af73c45dd8772ecd1d77284290-6367247-images-thumbs&n=13', answer:'лазанья',question:'Любимое блюдо гарфилда',cost:10,topic_id:1},
    { img:'https://zefirka.net/wp-content/uploads/2017/01/kotiki-spyat-v-krovatyax-kak-lyudi-fleshmob-iz-yaponii-1.jpg', answer:'16',question:'Сколько часов в сутки спят котики?',cost:10,topic_id:1},
    { img:'https://sun9-88.userapi.com/impg/HX35NxG4OuS5fXJJqGu4VIAotkMwLp_y5QVzdQ/AJUb46EPLTw.jpg?size=807x670&quality=96&sign=575249c25eed692cdcf7e307255b8633&type=album', answer:'лапки',question:'Что потеет у кошечек?',cost:10,topic_id:1},
    { img:'https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg', answer:'21',question:'Когда кошке 3 года – скольки человеским годам это соотвествует?',cost:10,topic_id:1},
  ]
  const data = cards.map((card) => ({
    ...card,
    createdAt:new Date(),
    updatedAt:new Date(),
  }))
  
  await queryInterface.bulkInsert('Cards',data );

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Cards', null, {});

  }
};
