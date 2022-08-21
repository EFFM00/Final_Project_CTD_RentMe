package com.booking.dh.controller;

import com.booking.dh.model.Characteristic;
import com.booking.dh.service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/characteristics")
public class CharacteristicController {

    @Autowired
    CharacteristicService characteristicService;

    @PostMapping("/add")
    public ResponseEntity<Characteristic> addCharacteristic(@RequestBody Characteristic characteristic) {
        return ResponseEntity.ok(characteristicService.createCharacteristic(characteristic));
    }

    @GetMapping
    public ResponseEntity<List<Characteristic>> listCharacteristics(){
        return ResponseEntity.ok(characteristicService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Characteristic> updateCharacteristic(@RequestBody Characteristic characteristic) {
        ResponseEntity<Characteristic> response;

        if (characteristic.getId() != null && characteristicService.readCharacteristicById(characteristic.getId()).isPresent()) {
            response = ResponseEntity.ok(characteristicService.updateCharacteristic(characteristic));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCharacteristic(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (characteristicService.readCharacteristicById(id).isPresent()) {
            characteristicService.deleteCharacteristic(id);
            response = ResponseEntity.ok("Characteristic successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
