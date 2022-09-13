package com.booking.dh.controller;

import com.booking.dh.exceptions.BadRequestException;
import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Booking;
import com.booking.dh.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) throws BadRequestException {
        return ResponseEntity.ok(bookingService.saveBooking(booking));
    }

    @GetMapping
    public ResponseEntity<List<Booking>> listBookings(){
        return ResponseEntity.ok(bookingService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking) throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.updateBooking(booking));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) throws ResourceNotFoundException {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Booking successfully removed.");
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<List<Booking>> findBookingByProductId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.findBookingByProductId(id));
    }


}
