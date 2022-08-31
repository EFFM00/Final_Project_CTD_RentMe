package com.booking.dh.controller;

import com.booking.dh.model.Booking;
import com.booking.dh.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
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
