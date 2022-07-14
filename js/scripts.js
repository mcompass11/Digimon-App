let digimonList = [
  {
    name: 'Agumon',
    img: 'http://digimon.shadowsmith.com/img/agumon.jpg',
    level: 'Rookie'
  },
  {
    name: 'Kuwagamon',
    img: 'https://digimon.shadowsmith.com/img/kuwagamon.jpg',
    level: 'Champion'
  },
  {
    name: 'Andromon',
    img: 'https://digimon.shadowsmith.com/img/andromon.jpg',
    level: 'Ultimate'
  }
];


  for(let i=0; i< digimonList.length; i++) {
    if(digimonList[i].level === 'Ultimate') {
      document.write(' Whoa, ' + digimonList[i].name + ' is strong!')
    } else {
      document.write(' ' + digimonList[i].name)
    }
  }