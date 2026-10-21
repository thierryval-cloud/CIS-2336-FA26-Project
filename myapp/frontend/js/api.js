// api.js
//
// This file is the ONLY place that talks to the backend.
// rooms.js / booking.js / my-bookings.js all call the functions below.
//
// STAGE 1:
// Uses mock data.
//
// STAGE 3:
// These functions will later be replaced with fetch() calls.

// ---------- Mock data used only in Stage 1 ----------

const MOCK_ROOMS = [
  {
    id: "r1",
    name: "Bayou City Room",
    capacity: 12,
    equipment: ["Projector", "Whiteboard", "Conference Phone"],
    foodAllowed: true,
  },
  {
    id: "r2",
    name: "Cullen Room",
    capacity: 8,
    equipment: ["TV Screen", "Whiteboard"],
    foodAllowed: false,
  },
];

let MOCK_BOOKINGS = [];

// ---------- Rooms ----------

async function getRooms() {
  return MOCK_ROOMS;

  // STAGE 3:
  // const response = await fetch("/api/rooms");
  // return await response.json();
}

async function getRoomById(id) {
  return MOCK_ROOMS.find((room) => room.id === id);

  // STAGE 3:
  // const response = await fetch(`/api/rooms/${id}`);
  // return await response.json();
}

// ---------- Bookings ----------

async function getBookings() {
  return MOCK_BOOKINGS;

  // STAGE 3:
  // const response = await fetch("/api/bookings");
  // return await response.json();
}

async function createBooking(bookingData) {
  const newBooking = {
    id: `b${Date.now()}`,
    ...bookingData,
  };

  MOCK_BOOKINGS.push(newBooking);

  return newBooking;

  // STAGE 3:
  // const response = await fetch("/api/bookings", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(bookingData),
  // });
  //
  // return await response.json();
}

async function deleteBooking(id) {
  MOCK_BOOKINGS = MOCK_BOOKINGS.filter(
    (booking) => booking.id !== id
  );

  // STAGE 3:
  // await fetch(`/api/bookings/${id}`, {
  //   method: "DELETE",
  // });
}
