// booking.js
//
// Handles the "Book a Room" form on booking.html.
// Uses rooms.js as a reference for how to fetch data and build
// HTML with template strings.

async function populateRoomSelect() {
  const select = document.getElementById("room-select");

  try {
    const rooms = await getRooms();

    rooms.forEach((room) => {
      const option = document.createElement("option");

      option.value = room.id;
      option.textContent = room.name;

      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading rooms:", error);
  }
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

  try {
    await createBooking(bookingData);

    statusEl.textContent = "Booking created successfully!";
    statusEl.classList.remove("error");
    statusEl.classList.add("success");

    event.target.reset();
  } catch (error) {
    console.error("Error creating booking:", error);

    statusEl.textContent = "Unable to create booking. Please try again.";
    statusEl.classList.remove("success");
    statusEl.classList.add("error");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populateRoomSelect();

  document
    .getElementById("booking-form")
    .addEventListener("submit", handleBookingSubmit);
});