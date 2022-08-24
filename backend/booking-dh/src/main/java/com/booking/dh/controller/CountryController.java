package com.booking.dh.controller;

import com.booking.dh.model.Country;
import com.booking.dh.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    CountryService countryService;

    @PostMapping("/add")
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        return ResponseEntity.ok(countryService.createCountry(country));
    }

    @GetMapping
    public ResponseEntity<List<Country>> listCountries(){
        return ResponseEntity.ok(countryService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Country> updateCountry(@RequestBody Country country) {
        ResponseEntity<Country> response;

        if (country.getId() != null && countryService.readCountryById(country.getId()).isPresent()) {
            response = ResponseEntity.ok(countryService.updateCountry(country));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCountry(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (countryService.readCountryById(id).isPresent()) {
            countryService.deleteCountry(id);
            response = ResponseEntity.ok("Country successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
