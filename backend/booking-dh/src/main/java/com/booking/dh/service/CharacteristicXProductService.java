package com.booking.dh.service;

import com.booking.dh.model.CharacteristicXProduct;
import com.booking.dh.repository.CharacteristicXProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicXProductService {

    @Autowired
    CharacteristicXProductRepository characteristicXProductRepository;

    public CharacteristicXProduct createCharacteristicXProduct(CharacteristicXProduct characteristicXProduct) {
        return characteristicXProductRepository.save(characteristicXProduct);
    }

    public Optional<CharacteristicXProduct> readCharacteristicXProductById(Long id){
        return characteristicXProductRepository.findById(id);
    }

    public List<CharacteristicXProduct> readAll() {
        return characteristicXProductRepository.findAll();
    }

    public CharacteristicXProduct updateCharacteristicXProduct(CharacteristicXProduct characteristicXProduct) {
        if(readCharacteristicXProductById(characteristicXProduct.getId()).isPresent()){
            return characteristicXProductRepository.save(characteristicXProduct);
        }else{
            return null;
        }
    }

    public void deleteCharacteristicXProduct(Long id) {
        characteristicXProductRepository.deleteById(id);
    }
}
