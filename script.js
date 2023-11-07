import data from '../data.json' assert{type: "json"};

// Remove this when merging with Jordan's branch
//Replace with appropriat function from jordan's get functions

const createLocations = () => {
  for(let loc of data) {
    let newEntity = document.createElement('a-text')
    newEntity.setAttribute('value', `${loc.name}`)
    newEntity.setAttribute('gps-new-entity-place', `latitude: ${loc.lat}; longitude: ${loc.long}`);
    //not necessary unless we can get it working.
    newEntity.setAttribute('look-at','[gps-new-camera]')
    newEntity.setAttribute('scale','120 120 120')

    let scene = document.querySelector('#scene')
    scene.appendChild(newEntity);
  }
}

const init = () => {
  createLocations();
}

window.onload = init;