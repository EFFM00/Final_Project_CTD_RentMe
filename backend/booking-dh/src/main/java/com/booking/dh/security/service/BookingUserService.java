package com.booking.dh.security.service;

import com.booking.dh.security.enums.RoleName;
import com.booking.dh.security.model.BookingUser;
import com.booking.dh.security.model.Role;
import com.booking.dh.security.repository.BookingUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingUserService implements UserDetailsService{

    @Autowired
    BookingUserRepository bookingUserRepository;

    public BookingUser createUser (BookingUser bookingUser) {
        return bookingUserRepository.save(bookingUser);
    }

    public Optional<BookingUser> readUserById(Long id){
        return bookingUserRepository.findById(id);
    }

    public List<BookingUser> readAll() {
        return bookingUserRepository.findAll();
    }

    public BookingUser updateUser(BookingUser role) {
        if(readUserById(role.getId()).isPresent()){
            return bookingUserRepository.save(role);
        }else{
            return null;
        }
    }

    public void deleteUser(Long id) {
        bookingUserRepository.deleteById(id);
    }

    public boolean existsByEmail(String email){
        return bookingUserRepository.existsByEmail(email);
    }

    public Optional<BookingUser> findByEmail(String email) {
        return bookingUserRepository.findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return bookingUserRepository.findByEmail(email).orElseThrow((() -> new UsernameNotFoundException("user email not found")));
    }
}
