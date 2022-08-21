package com.booking.dh.service;

import com.booking.dh.model.Characteristic;
import com.booking.dh.repository.CharacteristcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicService {

    @Autowired
    CharacteristcRepository characteristcRepository;

    public Characteristic createCharacteristic(Characteristic characteristic) {
        return characteristcRepository.save(characteristic);
    }

    public Optional<Characteristic> readCharacteristicById(Long id){
        return characteristcRepository.findById(id);
    }

    public List<Characteristic> readAll() {
        return characteristcRepository.findAll();
    }

    public Characteristic updateCharacteristic(Characteristic characteristic) {
        if(readCharacteristicById(characteristic.getId()).isPresent()){
            return characteristcRepository.save(characteristic);
        }else{
            return null;
        }
    }

    public void deleteCharacteristic(Long id) {
        characteristcRepository.deleteById(id);
    }
}
