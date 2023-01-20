'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const cards = [
      //КОТИКИ
      { img: '/img_cards/Котики/1.jpeg', answer: '18', question: 'Сколько всего у котиков пальцев?', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/2.jpg', answer: 'корниш-рекс', question: 'Назови породу котика', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/3.jpg', answer: 'леопольд', question: 'Как зовут кота из мультфильма, который предлагает жить дружно?', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/4.jpg', answer: '24', question: 'Сколько у кошки усов?', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/5.jpg', answer: 'лазанья', question: 'Любимое блюдо гарфилда', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/6.jpg', answer: '16', question: 'Сколько часов в сутки спят котики?', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/7.jpg', answer: 'лапки', question: 'Что потеет у кошечек?', cost: 10, topic_id: 1 },
      { img: '/img_cards/Котики/8.jpg', answer: '21', question: 'Когда кошке 3 года – скольки человеским годам это соотвествует?', cost: 10, topic_id: 1 },

      //КИНО
      { img: '/img_cards/Кино/Mask3.jpeg', answer: 'Локи', question: 'Маска какого бога попадает в руки застенчивому герою Джима Керри в фильме "Маска"?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Matrix.jpg', answer: 'рецепт суши', question: 'Что на самом деле представляет из себя легендарный зеленый код из «Матрицы»?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Zombieland2.jpeg', answer: 'Билл Мюррей', question: 'Какой комик появился в качестве зомби в «Добро пожаловать в Zомбилэнд»?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Drakula2.jpeg', answer: 'на испанском языке', question: 'Днем «Дракулу» снимали на английском. А на каком языке снимали фильм ночью?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Indiana.png', answer: 'R2-D2 и C-3PO', question: 'Какие персонажи из «Звездных войн» появляются в «Индиане Джонсе»?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Jurasik2.jpg', answer: 'черепах', question: 'Звуки спаривания каких животных были звуком общения велоцирапторов в «Парке Юрского периода»?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Friday_13.jpg', answer: 'Кристальное озеро', question: 'Как называется лагерь из ужастика «Пятница 13-е», в котором происходят жуткие убийства?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Ostin_Pauers2.jpg', answer: 'Остин Пауэрс: Человек-загадка международного уровня', question: 'Какой фильм является первым во франшизе «Остин Пауэрс»?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/Marvel.jpg', answer: 'Первый мститель', question: 'Если бы вы захотели посмотреть фильмы Marvel в хронологическом порядке, какой фильм вы бы включили в первую очередь?', cost: 10, topic_id: 2 },
      { img: '/img_cards/Кино/FightClub2.jpg', answer: 'стаканчик Starbucks', question: 'Какой предмет есть в каждой сцене «Бойцовского клуба»?', cost: 10, topic_id: 2 },

      //Программирование
      { img: '/img_cards/Программирование/1.png', answer: 'undefiden', question: 'Что выведет console.log(str)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/2.png', answer: 'Вася', question: 'Что выведет alert(name)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/3.png', answer: 'NaN', question: 'Что выведет console.log(a[0] + b[0])?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/4.png', answer: 'числа от 0 до 9', question: 'Что выведет console.log(tt)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/5.png', answer: 'null', question: 'Что выведет console.log(i)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/6.png', answer: '8', question: 'Что выведет console.log(a)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/7.png', answer: '12', question: 'Что выведет console.log(tt)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/8.png', answer: 'true', question: 'Что выведет console.log(tt)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/9.png', answer: 'true', question: 'Что выведет console.log(tt)?', cost: 10, topic_id: 3 },
      { img: '/img_cards/Программирование/10.png', answer: 'Пять', question: 'Сколько конструкций для циклов есть в javascript?', cost: 10, topic_id: 3 },

      //Загадки
      { img: '/img_cards/Загадки/1.jpeg', answer: 'Спать по ночам', question: 'Как человеку не спать 8 дней?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/2.jpg', answer: 'на коленях', question: 'Сидит девушка, а вы не можете сесть на её место, даже если она встанет и уйдёт. Где она сидит?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/3.jpg', answer: 'Пять минут', question: 'Если пять кошек ловят пять мышей за пять минут, то сколько времени нужно одной кошке, чтобы поймать одну мышку?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/4.jpg', answer: '1 и 2 рубля', question: 'На столе лежат две монеты, в сумме они дают 3 рубля. Одна из них — не 1 рубль. Какие это монеты?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/5.jpg', answer: 'Нет, так как через 72 часа будет ночь', question: 'Если в 12 часов ночи идёт дождь, то можно ли ожидать, что через 72 часа будет солнечная погода?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/6.jpeg', answer: 'Одна', question: 'У семерых братьев по сестре. Сколько всего сестер?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/7.jpeg', answer: 'Мэри', question: 'У отца Мэри 5 дочерей: Чача, Чече, Чичи, Чочо. Как зовут пятую дочь?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/8.jpg', answer: '50', question: 'На руках десять пальцев. Сколько пальцев на десяти руках?', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/9.jpeg', answer: '@', question: 'Не лает, не кусается, и точно так же называется', cost: 10, topic_id: 4 },
      { img: '/img_cards/Загадки/10.jpg', answer: 'Мягким знаком', question: 'Чем заканчиваются день и ночь?', cost: 10, topic_id: 4 },

      //Загадки по Катринкам
      { img: '/img_cards/Киря/Pult.jpg', answer: 'Volume', question: 'Что не так с этим пультом?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Garage.jpg', answer: 'Парковка', question: 'Для чего в этом старом гараже в полу есть круглый участок с деревянным настилом?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Parking.jpg', answer: '87', question: 'На каком номере припарковалась машина?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Cyrcles.jpg', answer: 'Нет', question: 'Оранжевые круги разного размера?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Doors.jpg', answer: 'Третья дверь', question: 'Вы выбегаете из лабиринта, перед вами три двери. Дверь слева ведёт к пылающему аду. Центральная дверь ведёт к кровавому убийце. Дверь справа — ко льву, который не ел три месяца. Какую дверь выберете?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Triangle.jpeg', answer: '3', question: 'Какая цифра должна быть в чёрном треугольнике?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Spiral.jpg', answer: 'А', question: 'Какая из этих спиралей образована одним сплошным куском верёвки?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Girl111.gif', answer: 'Каждому по-своему', question: 'В какую сторону крутится девушка?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Horisontal.jpg', answer: 'прямые', question: 'Эти горизонтальные линии прямые или кривые?', cost: 10, topic_id: 5 },
      { img: '/img_cards/Киря/Slon.jpeg', answer: 'Одна', question: 'Сколько ног у слона?', cost: 10, topic_id: 5 },
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
