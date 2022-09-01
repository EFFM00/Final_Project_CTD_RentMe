package com.booking.dh.security.service;

import com.booking.dh.security.model.User;
import com.booking.dh.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User createUser (User user) {
        return userRepository.save(user);
    }

    public Optional<User> readUserById(Long id){
        return userRepository.findById(id);
    }

    public List<User> readAll() {
        return userRepository.findAll();
    }

    public User updateUser(User role) {
        if(readUserById(role.getId()).isPresent()){
            return userRepository.save(role);
        }else{
            return null;
        }
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }
}
