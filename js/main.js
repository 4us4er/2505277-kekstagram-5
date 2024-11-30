const usersArray = [];

const descriptions = [
  "Солнечный закат и влюбленные в него",
  "Доброе утро из рая",
  "Когда жизнь дает цитрины, делайте лимонад",
  "Городские огни и бесконечные ночи",
  "Тропическое настроение",
  "Песочные ноги и загорелые носы",
  "Жизнь лучше в тапочках",
  "Минутка спокойствия в суматохе",
  "Полдень солнца",
  "Морское приключение",
  "Утро с кофе, книгами и пуфиком",
  "Приключения ждут снаружи",
  "Солнце, море и пачка картошки фри",
  "Смех - лучший медицинский препарат",
  "Только хорошие волны",
  "Утренняя заря",
  "Теплое свечение вечера",
  "Солнце в волосах",
  "Горячие напитки и холодные зимние вечера",
  "Рассказы из океана",
  "В поисках приключений",
  "Солнечные улыбки",
  "Теплые ночи и теплые огни",
  "Мечты в горах",
  "Жизнь - пляж, и еще что-то",
  "Кусочек неба на земле",
  "Городские улицы и городской бит",
  "Душа дикой цветочной",
  "Сохраняя момент",
  "Куда заведет тебя дорога",
  "Свобода в ветре",
  "Капля цвета в сером мире",
  "Кофе и страсть к путешествиям",
  "Ненаписанные истории и нерассказанные сказки",
];
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createCommentsArray() {
  const photoDescriptions = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"

  ];
  const names = [
    "Артем",
    "Виктор",
    "Петр",
    "Антонина",
    "Кирилл",
    "Валерия",
    "Настя",
    "Сеня",
    "Макс",
    "Егор",
    "Изольда",
  ];
  const commentaries = [];
  for (let i = 0; i < randomNum(0, 30); i++) {
    if (randomNum(1, 2) === 1){
      commentaries.push({
        id: i,
        avatar: `img/avatar-${i}.svg`,
        message: `${photoDescriptions[randomNum(0, photoDescriptions.length - 1)]}`,
        name: `${names[randomNum(0, names.length - 1)]}`,
      });
    }else{
      commentaries.push({
        id: i,
        avatar: `img/avatar-${i}.svg`,
        message: `${photoDescriptions[randomNum(0, photoDescriptions.length - 1)]} ${photoDescriptions[randomNum(0, photoDescriptions.length - 1)]}`,
        name: `${names[randomNum(0, names.length - 1)]}`,
      });
    }
  }
  return commentaries;
}
function createUsersArray() {
  for (let i = 1; i <= 25; i++) {
    usersArray.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `${descriptions[randomNum(0, 25)]}`,
      likes: randomNum(15, 200),
      comments: createCommentsArray(),
    });
  }
  return usersArray;
}

console.log(createUsersArray());
