package com.booking.dh.service;

import com.booking.dh.model.Booking;
import com.booking.dh.model.Product;
import com.booking.dh.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
}
