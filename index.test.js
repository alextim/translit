const translit = require('./index');

test('unsupported locale', () => {
  expect(() => translit('', 'en')).toThrow();
});

test('undefined', () => {
  expect(translit(undefined)).not.toBeDefined();
});

test('null', () => {
  expect(translit(null)).toBeNull();
});

test('empty', () => {
  expect(translit('')).toBe('');
});

const src = {
  Алушта: 'Alushta',
  Андрій: 'Andrii',
  Борщагівка: 'Borshchahivka',
  Борисенко: 'Borysenko',
  Вінниця: 'Vinnytsia',
  Володимир: 'Volodymyr',
  Гадяч: 'Hadiach',
  Богдан: 'Bohdan',
  Згурський: 'Zghurskyi',
  Ґалаґан: 'Galagan',
  Ґорґани: 'Gorgany',
  Донецьк: 'Donetsk',  
  Дмитро: 'Dmytro',
  Рівне: 'Rivne',  
  Олег: 'Oleh',  
  Есмань: 'Esman',  
  Єнакієве: 'Yenakiieve',
  Гаєвич: 'Haievych',
  "Короп’є": 'Koropie',
  Житомир: 'Zhytomyr',
  Жанна: 'Zhanna',
  Жежелів: 'Zhezheliv',
  Закарпаття: 'Zakarpattia',
  Казимирчук: 'Kazymyrchuk',
  Медвин: 'Medvyn',
  Михайленко: 'Mykhailenko',
  Іванків: 'Ivankiv',
  Іващенко: 'Ivashchenko',
  Їжакевич: 'Yizhakevych',
  Кадиївка: 'Kadyivka',
  "Мар’їне": 'Marine',
  Йосипівка: 'Yosypivka',
  Стрий: 'Stryi',
  Олексій: 'Oleksii',
  Київ: 'Kyiv',
  Коваленко: 'Kovalenko',
  "Біла Церква": 'Bila Tserkva',
  Чернівці: 'Chernivtsi',
  Шевченко: 'Shevchenko',
  Шостка: 'Shostka',
  Кишеньки: 'Kyshenky',
  Щербухи: 'Shcherbukhy',
  Гоща: 'Hoshcha',
  Гаращенко: 'Harashchenko',
  Юрій: 'Yurii',
  Корюківка: 'Koriukivka',
  Яготин: 'Yahotyn',
  Ярошенко: 'Yaroshenko',
  Костянтин: 'Kostiantyn',
  "Знам’янка": 'Znamianka',
  Феодосія: 'Feodosiia',
  Згорани: 'Zghorany',
  Розгон: 'Rozghon',
};

Object.keys(src).forEach((key) => {
  test(key, () => {
    expect(translit(key)).toBe(src[key].toLowerCase());
  });
});

