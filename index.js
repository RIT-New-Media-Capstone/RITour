// import data from '../data.json' assert{type: "json"}; 
window.onload = () => {
  let testEntitiesAdded = false;
  alert('If testing the lat/lon manual input on a mobile device, please turn off your GPS to avoid the real location being detected.');
  const el = document.querySelector("[gps-new-camera]");
  el.addEventListener("gps-camera-update-position", e => {
      if(!testEntitiesAdded) {
          alert(`Initial position: ${e.detail.position.longitude} ${e.detail.position.latitude}`);
      
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

        // Change these names
          for(const prop in data) {
              const entity = document.createElement("a-text");
              entity.setAttribute("value", `${data[prop].name}`)
              entity.setAttribute("scale", {
                  x: 120, 
                  y: 120,
                  z: 120
              });
              entity.setAttribute('gps-new-entity-place', {
                  latitude: prop.lat,
                  longitude: prop.long,
              });
              entity.setAttribute('clicker', { });                
              document.querySelector("a-scene").appendChild(entity);
          }
          testEntitiesAdded = true;
      }
  });

  document.getElementById("go").addEventListener("click", e=> {
      const lat = document.getElementById('lat').value;
      const lon = document.getElementById('lon').value;
      const minacc = document.getElementById('minacc').value;

      el.setAttribute('gps-new-camera', { simulateLatitude: lat, simulateLongitude: lon, positionMinAccuracy: minacc } );
  });
};