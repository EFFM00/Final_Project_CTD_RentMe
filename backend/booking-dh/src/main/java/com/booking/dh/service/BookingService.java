package com.booking.dh.service;

import com.booking.dh.model.Booking;
import com.booking.dh.model.Policy;
import com.booking.dh.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    public Booking save(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Optional<Booking> findById(Long id){
        return bookingRepository.findById(id);
    }

    public List<Booking> readAll() {
        return bookingRepository.findAll();
    }

    public Booking update(Booking booking) {
        if(findById(booking.getId()).isPresent()){
            return bookingRepository.save(booking);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        bookingRepository.deleteById(id);
    }
}
