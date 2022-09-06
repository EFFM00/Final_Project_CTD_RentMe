package com.booking.dh.security.controller;

import com.booking.dh.security.JWTUtil;
import com.booking.dh.security.enums.RoleName;
import com.booking.dh.security.model.AuthenticationRequest;
import com.booking.dh.security.model.AuthenticationResponse;
import com.booking.dh.security.model.BookingUser;
import com.booking.dh.security.model.Role;
import com.booking.dh.security.service.BookingUserService;
import com.booking.dh.security.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

    @Autowired
    JWTUtil jwtUtil;


    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody BookingUser registerBookingUser) {
        if (bookingUserService.existsByEmail(registerBookingUser.getEmail())) {
            return ResponseEntity.ok("Email already exists");
        }
        BookingUser bookingUser = new BookingUser(registerBookingUser.getName(), registerBookingUser.getLastName(), registerBookingUser.getEmail(), passwordEncoder.encode(registerBookingUser.getPassword()), registerBookingUser.getCity(), registerBookingUser.getRole());
        Role role = new Role();
        role = roleService.findByName(String.valueOf(RoleName.client)).get();
        if (registerBookingUser.getRole().equals("admin"))
            role = roleService.findByName(String.valueOf(RoleName.admin)).get();
        bookingUser.setRole(role);
        bookingUserService.createUser(bookingUser);
        return ResponseEntity.status(HttpStatus.CREATED).body("User successfully created");
    }

    /*
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody BookingUser loginBookingUser){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginBookingUser.getEmail(), loginBookingUser.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token =  "token" /*inserte aquí su método de creación de token;
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return new ResponseEntity(HttpStatus.OK);
    }
    */

    @PostMapping(path = "/login")
    public ResponseEntity<String> loginUser(@RequestBody AuthenticationRequest request) {
        try {
            Authentication a =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(a);
            UserDetails userDetails = bookingUserService.loadUserByUsername(request.getEmail());
            String jwt = jwtUtil.generateToken(a,userDetails);
            //user = (Optional<BookingUser>) authentication.getPrincipal();
            return ResponseEntity.ok(jwt);

        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}