package com.booking.dh.service;

import com.booking.dh.model.Country;
import com.booking.dh.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    CountryRepository countryRepository;

    public Country createCountry(Country country) {
        return countryRepository.save(country);
    }

    public Optional<Country> readCountryById(Long id){
        return countryRepository.findById(id);
    }

    public List<Country> readAll() {
        return countryRepository.findAll();
    }

    public Country updateCountry(Country country) {
        if(readCountryById(country.getId()).isPresent()){
            return countryRepository.save(country);
        }else{
            return null;
        }
    }

    public void deleteCountry(Long id) {
        countryRepository.deleteById(id);
    }
}
