  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello');
  // Interpolated
  console.log('Hola soy una cadena %s', 'de texto');
  console.log(`Hola soy una ${'cadena de texto'}`);

  // Styled
  //console.log('%c Soy un texto grande', 'font-size:40px; background:red; text-shadow: 10px 10px 0 blue');

  // warning!
  console.warn('cuidado');

  // Error :|
  console.error('No, algo anda mal!');

  // Info
  console.info('El sitio original de Space Jam todavia existe');

  // Testing
  const p = document.querySelector('p');
  console.assert( p.classList.contains('ouch'), 'Eso es incorrecto');

  // clearing
  console.clear();

  // Viewing DOM Elements
  console.log(p);
  console.dir(p);

  console.clear();

  // Grouping together
  dogs.forEach( dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`Este es ${dog.name}`);
    console.log(`${dog.name} tiene ${dog.age} años`);
    console.log(`${dog.name} tiene ${dog.age * 7} años de perro`);
    console.groupEnd(`${dog.name}`);
  })

  // counting
  console.count('felipon');
  console.count('kbrown');
  console.count('kbrown');
  console.count('kbrown');
  console.count('felipon');
  console.count('felipon');
  console.count('felipon');
  console.count('felipon');
  console.count('kbrown');
  console.count('felipon');
  console.count('felipon');
  console.count('felipon');
  console.count('kbrown');
  console.count('felipon');
  console.count('felipon');
  console.count('kbrown');
  console.count('kbrown');

  // timing
  console.time('fetching data');
  fetch('https://api.github.com/users/ponkbrown')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data)
    });

  // table
  console.table(dogs);
