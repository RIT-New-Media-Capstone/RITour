// import data from '../data.json' assert{type: "json"};

const data = {
  "Orange Hall": {
      "name": "Orange Hall",
      "desription": "Home to many IGM classrooms and offices",
      "type": "Academic Building",
      "lat": 43.08364334644275,
      "long": -77.67879412947539
  },
  "Kate Gleason College of Engineering": {
      "name": "Kate Gleason College of Engineering",
      "desription": "From space stations to nanotechnology, the potential for innovative engineering is endless.",
      "type": "Academic Building",
      "lat": 43.08411253414598,
      "long": -77.67906889761478
  },
  "Golisano Hall": {
      "name": "Golisano Hall",
      "desription": "A center for cutting-edge study and research, this building is the home to the B. Thomas Golisano College of Computing and Information Sciences. This facility includes academic classrooms and labs for computer science, information technology, and software engineering students, as well as a 151-seat auditorium and a beautiful three-story atrium.",
      "type": "Academic Building",
      "lat": 43.0838793356455,
      "long": -77.67972651060029
  },
  "Fountain Park": {
      "name": "Fountain Park",
      "desription": "Home",
      "type": "Outdoor Area",
      "lat": 43.083228410769735,
      "long": -77.67899871508926
  },
  "CTRL ALT Deli": {
      "name": "CTRL ALT Deli",
      "desription": "Grab and Go Food and Beverages",
      "type": "Dining",
      "lat": 43.084587365959266,
      "long": -77.68009297331419
  },
  "Thomas Gosnell Hall": {
      "name": "Thomas Gosnell Hall",
      "desription": "An academic building that houses classrooms, labs and department offices for the College of Science, with undergraduate and graduate programs in mathematics, biology, bioinformatics, physics and medical sciences.",
      "type": "Academic Building",
      "lat": 43.0836820814997,
      "long": -77.67779953456292
  }
} 

// Remove this when merging with Jordan's branch
//Replace with appropriat function from jordan's get functions


const createLocations = () => {
  let scene = document.querySelector('#scene')
  for(let loc in data) {
    console.log(data[loc].name)

    let coordinates = `latitude: ${data[loc].lat}; longitude: ${data[loc].long}`
    console.log(data[loc].name + ", " + coordinates)

    let newEntity = document.createElement('a-text')

    newEntity.setAttribute('value', `${data[loc].name}`)

    let gps = document.createAttribute('gps-new-entity-place');
    gps.value = coordinates;
    newEntity.setAttributeNode(gps);

    //not necessary unless we can get it working.
    newEntity.setAttribute('look-at','[gps-new-camera]')
    // newEntity.setAttribute('scale','120 120 120')
    let scale = document.createAttribute('scale');
    scale.value = '120 120 120';
    newEntity.setAttributeNode(scale);

    scene.appendChild(newEntity);
    console.log('new entity created: ' + data[loc].name)
  }
}

const updateExisting = () => {
  let el = document.querySelector('#text1')
  let scene = document.querySelector('#scene')
  
  let gps = document.createAttribute('gps-new-entity-place');
    gps.value = 'latitude: 43.08411253414598; longitude: -77.67906889761478';
    el.setAttributeNode(gps);

  el.setAttribute('value','TEST TEXT')
}

const init = () => {
  createLocations();
  // updateExisting();
  console.log('Intialization complete')
}

window.onload = init;