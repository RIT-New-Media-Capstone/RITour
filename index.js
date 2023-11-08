import data from '../data.json' assert{type: "json"}; 
window.onload = () => {
  let testEntitiesAdded = false;
  alert('If testing the lat/lon manual input on a mobile device, please turn off your GPS to avoid the real location being detected.');
  const el = document.querySelector("[gps-new-camera]");
  el.addEventListener("gps-camera-update-position", e => {
      if(!testEntitiesAdded) {
          alert(`Initial position: ${e.detail.position.longitude} ${e.detail.position.latitude}`);
      
        // Change these names
          for(const prop of data) {
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