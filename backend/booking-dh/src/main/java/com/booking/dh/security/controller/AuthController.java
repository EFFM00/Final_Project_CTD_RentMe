package com.booking.dh.security.controller;

import com.booking.dh.security.enums.RoleName;
import com.booking.dh.security.model.Role;
import com.booking.dh.security.model.User;
import com.booking.dh.security.service.RoleService;
import com.booking.dh.security.service.UserService;
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
    UserService userService;
    @Autowired
    RoleService roleService;

    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User registerUser) {
        if (userService.existsByEmail(registerUser.getEmail())) {
            return ResponseEntity.ok("email alredy exists");
        }
       User user = new User(registerUser.getName(), registerUser.getLastName(), registerUser.getEmail(), passwordEncoder.encode(registerUser.getPassword()), registerUser.getCity());
       Role role = new Role();
       role = roleService.findByName(String.valueOf(RoleName.client)).get();
       if(registerUser.getRole().equals("ADMIN"))
           role = roleService.findByName(String.valueOf(RoleName.admin)).get();
       user.setRole(role);
       userService.createUser(user);
       return ResponseEntity.status(HttpStatus.CREATED).body("User created succesfully");
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginUser){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getEmail(), loginUser.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token =  "token" /*inserte aquí su método de creación de token*/;
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return new ResponseEntity(HttpStatus.OK);
    }
}