package com.booking.dh.service;

import com.booking.dh.model.Category;
import com.booking.dh.model.City;
import com.booking.dh.repository.CategoryRepository;
import com.booking.dh.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public City createCity(City city) {
        return cityRepository.save(city);
    }

    public Optional<City> readCityById(Long id){
        return cityRepository.findById(id);
    }

    public List<City> readAll() {
        return cityRepository.findAll();
    }

    public City updateCategory(City city) {
        if(readCityById(city.getId()).isPresent()){
            return cityRepository.save(city);
        }else{
            return null;
        }
    }

    public void deleteCity(Long id) {
        cityRepository.deleteById(id);
    }

}
