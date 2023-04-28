const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

function search(str) {
  let results = [];
  results = fruit.filter((item) => {
    return item.toLowerCase().includes(str);
  });

  showSuggestions(results);
}

function searchHandler(e) {
  if (input.value === '') {
    removeSuggestions();
  } else {
    search(input.value.toLowerCase());
  }
}

function showSuggestions(results, inputVal) {
  removeSuggestions();
  results.forEach((item) => {
    let newLi = document.createElement('li');
    newLi.innerText = item;
    suggestions.append(newLi);
  });
}

function removeSuggestions() {
  const items = document.querySelectorAll('li');
  for (let li of items) {
    li.remove();
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  removeSuggestions();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
