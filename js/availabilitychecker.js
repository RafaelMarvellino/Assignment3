document.getElementById('checkAvailabilityBtn').addEventListener('click', function() {
    // Get form values
    const room = document.getElementById('inputRoom').value;
    const adult = document.getElementById('inputAdult').value;
    const children = document.getElementById('inputChildren').value;
    const checkIn = document.getElementById('inputCheckIn').value;
    const checkOut = document.getElementById('inputCheckOut').value;
    const resultDiv = document.getElementById('availabilityResult');

    // To clear all previous results
    resultDiv.innerHTML = '';

    // Basic validation
    if (!room || !adult || !checkIn || !checkOut) {
        resultDiv.innerHTML = '<p style="color: red;">Please make sure you have filled in all required fields.</p>';
        return;
    }

    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Check that check-out date is after check-in date
    if (checkInDate >= checkOutDate) {
        resultDiv.innerHTML = '<p style="color: red;">Check-out date must be after check-in date.</p>';
        return;
    }

    let availableRooms = 3;  

    if (room <= availableRooms) {
        resultDiv.innerHTML = `<p style="color: green;"><strong>Rooms are available. You requested ${room} room(s), ${adult} adult(s), and ${children} child(ren).</strong></p>`;
    } else {
        resultDiv.innerHTML = '<p style="color: red;">Sorry, the requested number of rooms is not available.</p>';
    }
});

// JavaScript for sticky navigation
window.onscroll = function() {makeNavbarSticky()};

var navbar = document.querySelector(".tm-top-bar");
var sticky = navbar.offsetTop;  // Get the navbar's offset position

function makeNavbarSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// scripts.js
function navigateToMap() {
  // Define the location coordinates or place name
  const place = "Aspendale Shore Motel"; // You can also use coordinates like '37.7749,-122.4194'
  
  // Construct the Google Maps URL
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  
  // Open the Google Maps URL in a new tab
  window.open(mapUrl, '_blank');
}
