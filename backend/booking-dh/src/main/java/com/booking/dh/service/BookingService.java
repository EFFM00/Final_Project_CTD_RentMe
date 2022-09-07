package com.booking.dh.service;

import com.booking.dh.model.Booking;
import com.booking.dh.model.Product;
import com.booking.dh.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    public Booking saveBooking (Booking booking) {
        return bookingRepository.save(booking);
    }

    public Optional<Booking> findBookingById(Long id){
        return bookingRepository.findById(id);
    }

    public List<Booking> findBookingByProductId(Long id){
        List<Booking> bookingsByProduct = bookingRepository.findBookingByProductId(id);
        return bookingsByProduct;
    }

    public List<Booking> readAll() {
        return bookingRepository.findAll();
    }

    public Booking updateBooking (Booking booking) {
        if(findBookingById(booking.getId()).isPresent()){
            return bookingRepository.save(booking);
        }else{
            return null;
        }
    }

    public void deleteBooking (Long id){
        bookingRepository.deleteById(id);
    }

    public Collection<Booking> findNotAvailable(LocalDate checkInDate, LocalDate checkOutDate) {
        Collection<Booking> bookings = bookingRepository.findAll();
        Set<Booking> notAvailable = new HashSet<>();
        for (Booking booking : bookings) {
            if (booking.getCheckInDate().isBefore(checkOutDate) && booking.getCheckOutDate().isAfter(checkInDate)) {
                notAvailable.add(booking);
            }
            if (booking.getCheckInDate().isEqual(checkOutDate) || booking.getCheckOutDate().isEqual(checkInDate)) {
                notAvailable.add(booking);
            }
        }
        return notAvailable;
    }
}
