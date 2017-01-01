const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array prototype.filter()
//1. Filtra de la lista de inventores de aquellos que nacieron antes de 1500
const milquinientos = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(milquinientos);

// Array prototype.map()
// 2. Nos da un array con el primer nombre y el segundo nombre
const nombreApellido = inventors.map(inventor => (`${inventor.first} ${inventor.last}`))
console.log(nombreApellido);

// Array prototype.sort()
// 3. Vamos a ordernar la lista por el año en que nacieron
/*
const ordenados = inventors.sort(function(a,b){
  if(a.year > b.year){
    return 1;
  }
  else{
    return -1;
  }
});
*/
const ordenados = inventors.sort( (a,b) => a.year > b.year ? 1 : -1)
console.table(ordenados);

// Array prototype.reduce()
// 4. Cuantos años vivieron en total estos inventores

const totalAnos = inventors.reduce( (total, inventor) => {
  return total + ( inventor.passed - inventor.year)
}, 0);
console.log(totalAnos);

// 5. Ordena los inventores por los años que vivieron

const viejitos = inventors.sort( function(a,b){
  const lastguey = a.passed - a.year;
  const nextguey = b.passed - b.year;
  return lastguey > nextguey ? 3 : -1
})
console.table(viejitos)

// 6. Crea una lista de los boulevares de paris que contengan 'de' en cualquier parte del nombre
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//para usar este codigo copialo (ctrl-v) y pasalo como un snippet a la consola de chrome

const category = document.querySelector('.mw-category');
// Este es igual pero es mas leible el segundo
// const links = [...category.querySelectorAll('a')];
//const links = Array.from(category.querySelectorAll('a'));
//const de = links
//            .map(link => link.textContent)
//            .filter(streetName => streetName.includes('de'));
//console.table(de);

// 7. Ordena a las personas alfabeticamente.
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const peopleSorted = people.sort(function(lastOne, nextOne){
  const [apellidoA, nombreA] = lastOne.split(', ');
  const [apellidoB, nombreB] = nextOne.split(', ');
  return apellidoA > apellidoB ? 1 : -1;
})

console.log(peopleSorted);

// 8. Ejercicio para reduce()
// Sumar las instancias de cada veiculo
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transporte = data.reduce( function(obj, item){
if(!obj[item]){
  obj[item] = 0;
}
obj[item]++;
return obj;
}, {})
console.log(transporte);
