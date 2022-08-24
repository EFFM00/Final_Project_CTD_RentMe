package com.booking.dh.service;

import com.booking.dh.model.Characteristic;
import com.booking.dh.repository.CharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicService {

    @Autowired
    CharacteristicRepository characteristicRepository;

    public Characteristic createCharacteristic(Characteristic characteristic) {
        return characteristicRepository.save(characteristic);
    }

    public Optional<Characteristic> readCharacteristicById(Long id){
        return characteristicRepository.findById(id);
    }

    public List<Characteristic> readAll() {
        return characteristicRepository.findAll();
    }

    public Characteristic updateCharacteristic(Characteristic characteristic) {
        if(readCharacteristicById(characteristic.getId()).isPresent()){
            return characteristicRepository.save(characteristic);
        }else{
            return null;
        }
    }

    public void deleteCharacteristic(Long id) {
        characteristicRepository.deleteById(id);
    }
}
