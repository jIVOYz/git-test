const citiesUkraine = ['Верховцево', 'Буча', 'Харьков', 'Запорожье']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesUkrainePopulation = {
    Kyiv: 20,
    Kharkiv: 8,
    Kherson :5,
    Dnipro: 3
}

const citiesEuropePopulation = {
    Berlin: 20,
    Praga: 8,
    Paris :5,
}

// Spread
const allCities = [...citiesUkraine, ...citiesEurope]
console.log(allCities)