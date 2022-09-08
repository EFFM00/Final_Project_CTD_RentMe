package com.booking.dh.controller;

import com.booking.dh.model.Booking;
import com.booking.dh.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {
        if (booking.getCheckOutDate().isBefore(booking.getCheckInDate())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Check-out date cannot be earlier than check-in date.");
        }
        if (booking.getCheckInDate().isBefore(LocalDate.now())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Check-in date cannot be earlier than today.");
        }
        Collection<Booking> notAvailable = bookingService.findNotAvailable(booking.getCheckInDate(), booking.getCheckOutDate());
        for (Booking notAvailableBooking: notAvailable) {
            if (notAvailableBooking.getProduct().getId() == booking.getProduct().getId()){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This product is not available between selected dates.");
            }
        }
        return ResponseEntity.ok(bookingService.saveBooking(booking));
    }

    @GetMapping
    public ResponseEntity<List<Booking>> listBookings(){
        return ResponseEntity.ok(bookingService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking) {
        ResponseEntity<Booking> response;

        if (booking.getId() != null && bookingService.findBookingById(booking.getId()).isPresent()) {
            response = ResponseEntity.ok(bookingService.updateBooking(booking));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (bookingService.findBookingById(id).isPresent()) {
            bookingService.deleteBooking(id);
            response = ResponseEntity.ok("Booking successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<List<Booking>> findBookingByProductId(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.findBookingByProductId(id));
    }


}
