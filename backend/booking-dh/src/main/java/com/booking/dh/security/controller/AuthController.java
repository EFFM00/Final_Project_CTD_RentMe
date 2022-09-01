package com.booking.dh.security.controller;

import com.booking.dh.security.enums.RoleName;
import com.booking.dh.security.model.Role;
import com.booking.dh.security.model.BookingUser;
import com.booking.dh.security.service.RoleService;
import com.booking.dh.security.service.BookingUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    BookingUserService bookingUserService;
    @Autowired
    RoleService roleService;

    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody BookingUser registerBookingUser) {
        if (bookingUserService.existsByEmail(registerBookingUser.getEmail())) {
            return ResponseEntity.ok("email alredy exists");
        }
       BookingUser bookingUser = new BookingUser(registerBookingUser.getName(), registerBookingUser.getLastName(), registerBookingUser.getEmail(), passwordEncoder.encode(registerBookingUser.getPassword()), registerBookingUser.getCity());
       Role role = new Role();
       role = roleService.findByName(String.valueOf(RoleName.client)).get();
       if(registerBookingUser.getRole().equals("ADMIN"))
           role = roleService.findByName(String.valueOf(RoleName.admin)).get();
       bookingUser.setRole(role);
       bookingUserService.createUser(bookingUser);
       return ResponseEntity.status(HttpStatus.CREATED).body("User created succesfully");
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody BookingUser loginBookingUser){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginBookingUser.getEmail(), loginBookingUser.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token =  "token" /*inserte aquí su método de creación de token*/;
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return new ResponseEntity(HttpStatus.OK);
    }
}