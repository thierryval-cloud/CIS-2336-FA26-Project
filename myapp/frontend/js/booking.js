// booking.js
//
// Handles the "Book a Room" form on booking.html.
// Use rooms.js as your reference for how to fetch data and build
// HTML with template strings.

async function populateRoomSelect() {
  const select = document.getElementById("room-select");
  const rooms = await getRooms();
  rooms.forEach((room) => {
    const option = document.createElement("option");
    option.value = room.id;
    option.textContent = room.name;
    select.appendChild(option);
  });
}
async function handleBookingSubmit(event) {
  event.preventDefault();
  const statusEl = document.getElementById("form-status");
  const bookingData = {
    roomId: document.getElementById("room-select").value,
    clubName: document.getElementById("club-name").value,
    date: document.getElementById("date").value,
    startTime: document.getElementById("start-time").value,
    endTime: document.getElementById("end-time").value,
    purpose: document.getElementById("purpose").value,
  };
  await createBooking(bookingData);
  statusEl.textContent = "Booking created successfully!";
  statusEl.classList.remove("error");
  statusEl.classList.add("success");
  event.target.reset();
}
document.addEventListener("DOMContentLoaded", () => {
  populateRoomSelect();
  document
    .getElementById("booking-form")
    .addEventListener("submit", handleBookingSubmit);
});