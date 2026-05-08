
function getLocation() {
  const output = document.getElementById("location-output");
  const locationField = document.getElementById("customer-location");

  if (!navigator.geolocation) {
    output.innerHTML = "Geolocation is not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      output.innerHTML = `Location shared: Latitude ${lat}, Longitude ${lon}`;
      locationField.value = `${lat}, ${lon}`;
    },
    () => {
      output.innerHTML = "Unable to retrieve your location.";
    }
  );
}
