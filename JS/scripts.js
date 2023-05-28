const digimonRepository = (function() {
  let digimonList = [];
  const apiUrl = 'https://digimon-api.vercel.app/api/digimon';

  //adds digimon to array
  function add(digimon) {
    digimonList.push(digimon);
  }

  //fetches the digimon from the array
  function getAll() {
    return digimonList;
  }

  //adds digimon to a list
  function addListItem(digimon) {
    let digiGroup = document.querySelector('.digimon-list');
    let digiGroupItem = document.createElement('li');
    let digiButton =  createDigimonButton(digimon);

    digiGroupItem.classList.add('list-group-item');
    digiGroup.appendChild(digiGroupItem);
    digiGroupItem.appendChild(digiButton);
  }

  //creates digimon button
  function createDigimonButton(digimon) {
    let digiButton = document.createElement('button');
    let imgElement = document.createElement('img');
    imgElement.width = "100";
    imgElement.height = "100";

    //add class to button
    digiButton.classList.add('btn', 'btn-primary');

    digiButton.addEventListener('click', function() {
      showDetails(digimon);
      $('.modal').modal('toggle');
    });

    loadList(digimon).then(function() {
      imgElement.src = digimon.image;
    });

    digiButton.appendChild(imgElement);

    return digiButton;
  }

  //display digimon details
  function showDetails(digimon) {
    loadList(digimon).then(function() {
      showModal(digimon);
    });
  }

  //loads digimon to digimonList
  async function loadList() {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      json.forEach(function (item) {
        let digimon = {
          name: item.name,
          image: item.img,
          level: item.level
        };
        add(digimon);
      });
    } catch (e) {
      console.log(e);
    }
  }

  //create modal
  function showModal(digimon) {
    let modalTitle = document.querySelector('h5');
    modalTitle.innerText = digimon.name;

    let modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';

    let imageElement = document.createElement('img');
    imageElement.src = digimon.image;
    imageElement.alt = digimon.name;
    imageElement.width = '200';
    modalBody.appendChild(imageElement);

    let digiDetails = document.createElement('div');
    digiDetails.innerHTML = `<p><b>Level:</b> ${digimon.level}</p>`;
    modalBody.appendChild(digiDetails);
    }


  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal,
    //hideModal: hideModal
  };
}) ();

digimonRepository.loadList().then(function() {
  digimonRepository.getAll().forEach(function(digimon){
    digimonRepository.addListItem(digimon);
  });
});