// import data from '../data.json' assert{type: "json"}; 
window.onload = () => {
  let testEntitiesAdded = false;
  const el = document.querySelector("[gps-new-camera]");
  // el.addEventListener("gps-camera-update-position", e => {
      if(!testEntitiesAdded) {
          // alert(`Initial position: ${e.detail.position.longitude} ${e.detail.position.latitude}`);
      
        const data = {
          "Orange Hall": {
              "name": "Orange Hall",
              "desription": "Home to many IGM classrooms and offices",
              "type": "Academic Building",
              "lat": 43.083,
              "long": -77.678
          },
          "Kate Gleason College of Engineering": {
              "name": "Kate Gleason College of Engineering",
              "desription": "From space stations to nanotechnology, the potential for innovative engineering is endless.",
              "type": "Academic Building",
              "lat": 43.084,
              "long": -77.679
          },
          "Golisano Hall": {
              "name": "Golisano Hall",
              "desription": "A center for cutting-edge study and research, this building is the home to the B. Thomas Golisano College of Computing and Information Sciences. This facility includes academic classrooms and labs for computer science, information technology, and software engineering students, as well as a 151-seat auditorium and a beautiful three-story atrium.",
              "type": "Academic Building",
              "lat": 43.083,
              "long": -77.679
          },
          "Fountain Park": {
              "name": "Fountain Park",
              "desription": "Home",
              "type": "Outdoor Area",
              "lat": 43.083,
              "long": -77.678
          },
          "CTRL ALT Deli": {
              "name": "CTRL ALT Deli",
              "desription": "Grab and Go Food and Beverages",
              "type": "Dining",
              "lat": 43.084,
              "long": -77.680
            },
            "Thomas Gosnell Hall": {
              "name": "Thomas Gosnell Hall",
              "desription": "An academic building that houses classrooms, labs and department offices for the College of Science, with undergraduate and graduate programs in mathematics, biology, bioinformatics, physics and medical sciences.",
              "type": "Academic Building",
              "lat": 43.083,
              "long": -77.677
            }
          }

          //TEST 1 TEXT
          // console.log("about to make entity")
          // const entity = document.createElement("a-text");
          //     entity.setAttribute("value", `Test Title`)
          //     entity.setAttribute("scale", {
          //         x: 120, 
          //         y: 120,
          //         z: 120
          //     });
          //     entity.setAttribute('gps-new-entity-place', {
          //         latitude: 43.083,
          //         longitude: -77.676,
          //     });
          //     entity.setAttribute('clicker', { });                
          //     document.querySelector("a-scene").appendChild(entity);
          
          //     console.log("entity made")
          

          //TEXT
          // for(const prop in data) {
          //     const entity = document.createElement("a-text");
          //     entity.setAttribute("value", `${data[prop].name}`)
          //     entity.setAttribute("scale", {
          //         x: 120, 
          //         y: 120,
          //         z: 120
          //     });
          //     entity.setAttribute('gps-new-entity-place', {
          //         latitude: data[prop].lat,
          //         longitude: data[prop].long,
          //     });
          //     entity.setAttribute('clicker', { });                
          //     document.querySelector("a-scene").appendChild(entity);
          // }

          //BOXES
        //   for(const prop in data) {
        //     const entity = document.createElement("a-box");
        //     entity.setAttribute("scale", {
        //         x: 20, 
        //         y: 20,
        //         z: 20
        //     });
        //     entity.setAttribute('material', { color: red } );
        //     entity.setAttribute('gps-new-entity-place', {
        //         latitude: prop.lat,
        //         longitude: prop.long
        //     });
        //     entity.setAttribute('clicker', { });                
        //     document.querySelector("a-scene").appendChild(entity);
        // }

          for(const prop in data) {
            let coordinates = `latitude: ${data[prop].lat}; longitude: ${data[prop].long}`
            console.log(data[prop].name + ", " + coordinates)

            let newEntity = document.createElement('a-text')

            newEntity.setAttribute('value', `${data[prop].name}`)

            let gps = document.createAttribute('gps-new-entity-place');
            gps.value = coordinates;
            newEntity.setAttributeNode(gps);

            //not necessary unless we can get it working.
            newEntity.setAttribute('look-at', '[gps-new-camera]')
            // newEntity.setAttribute('scale','120 120 120')
            let scale = document.createAttribute('scale');
            scale.value = '120 120 120';
            newEntity.setAttributeNode(scale);

            scene.appendChild(newEntity);
          }
        
          testEntitiesAdded = true;
      }
  // });

  // document.getElementById("go").addEventListener("click", e=> {
  //     const lat = document.getElementById('lat').value;
  //     const lon = document.getElementById('lon').value;
  //     const minacc = document.getElementById('minacc').value;

  //     el.setAttribute('gps-new-camera', { simulateLatitude: lat, simulateLongitude: lon, positionMinAccuracy: minacc } );
  // });
};