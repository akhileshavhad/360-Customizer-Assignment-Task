# Task 4 : Concurrency Handling in Event Booking System

## Scenario:
 You are developing a Node.js application where users can book events. The event booking system should prevent double bookings for the same event.


## 4.1. Database Schema:
- Created `event` model with `name`, `date`, and `booked` fields.
- Indexed `booked` for fast querying.

## 4.2. Concurrency handling :
- Implemented `/book-event/:eventId` endpoint.
- Used Mongoose sessions and transactions to handle concurrent booking requests, preventing double bookings.

