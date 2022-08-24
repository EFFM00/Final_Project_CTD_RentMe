package com.booking.dh.controller;

import com.booking.dh.model.City;
import com.booking.dh.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    CityService cityService;

    @PostMapping("/add")
    public ResponseEntity<City> addCity(@RequestBody City city) {
        return ResponseEntity.ok(cityService.createCity(city));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<City>> listCities(){
        return ResponseEntity.ok(cityService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<City> updateCity(@RequestBody City city) {
        ResponseEntity<City> response;

        if (city.getId() != null && cityService.readCityById(city.getId()).isPresent()) {
            response = ResponseEntity.ok(cityService.updateCategory(city));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (cityService.readCityById(id).isPresent()) {
            cityService.deleteCity(id);
            response = ResponseEntity.ok("City successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
