package com.booking.dh.controller;

import com.booking.dh.model.CharacteristicXProduct;
import com.booking.dh.service.CharacteristicXProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-characteristics")
public class CharacteristicXProductController {

    @Autowired
    CharacteristicXProductService characteristicXProductService;

    @PostMapping("/add")
    public ResponseEntity<CharacteristicXProduct> addProductCharacteristic(@RequestBody CharacteristicXProduct characteristicXProduct) {
        return ResponseEntity.ok(characteristicXProductService.createCharacteristicXProduct(characteristicXProduct));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CharacteristicXProduct> findProductCharacteristicById(@PathVariable Long id) {
        if(characteristicXProductService.readCharacteristicXProductById(id).isPresent()){
            return ResponseEntity.ok(characteristicXProductService.readCharacteristicXProductById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<CharacteristicXProduct>> listProductCharacteristics(){
        return ResponseEntity.ok(characteristicXProductService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<CharacteristicXProduct> updateProductCharacteristic(@RequestBody CharacteristicXProduct characteristicXProduct) {
        ResponseEntity<CharacteristicXProduct> response;

        if (characteristicXProduct.getId() != null && characteristicXProductService.readCharacteristicXProductById(characteristicXProduct.getId()).isPresent()) {
            response = ResponseEntity.ok(characteristicXProductService.updateCharacteristicXProduct(characteristicXProduct));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProductCharacteristic(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (characteristicXProductService.readCharacteristicXProductById(id).isPresent()) {
            characteristicXProductService.deleteCharacteristicXProduct(id);
            response = ResponseEntity.ok("Product characteristic successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
