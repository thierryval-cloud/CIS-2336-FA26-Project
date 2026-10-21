// my-bookings.js
//
// Renders the list of bookings on my-bookings.html and lets the
// user cancel a booking. Use rooms.js as your reference.

async function renderBookings() {
  const container = document.getElementById("bookings-list");

  const bookings = await getBookings();

  if (bookings.length === 0) {
    container.innerHTML = "<p>No bookings found.</p>";
    return;
  }

  let bookingHtml = [];

  for (const booking of bookings) {
    const room = await getRoomById(booking.roomId);

    bookingHtml.push(`
      <div class="booking-item">
        <h3>${room.name}</h3>
        <p><strong>Room ID:</strong> ${booking.roomId}</p>
        <p><strong>Club:</strong> ${booking.clubName}</p>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Time:</strong> ${booking.startTime} - ${booking.endTime}</p>
        <p><strong>Purpose:</strong> ${booking.purpose}</p>

        <button class="cancel-button" data-id="${booking.id}">
          Cancel
        </button>
      </div>
    `);
  }

  container.innerHTML = bookingHtml.join("");

  const buttons = document.querySelectorAll(".cancel-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      handleCancelClick(button.getAttribute("data-id"));
    });
  });
}

async function handleCancelClick(bookingId) {
  await deleteBooking(bookingId);
  renderBookings();
}

document.addEventListener("DOMContentLoaded", renderBookings);