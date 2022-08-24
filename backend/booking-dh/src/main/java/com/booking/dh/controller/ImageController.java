package com.booking.dh.controller;

import com.booking.dh.model.Image;
import com.booking.dh.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImageService imageService;

    @PostMapping("/add")
    public ResponseEntity<Image> addImage(@RequestBody Image image) {
        return ResponseEntity.ok(imageService.createImage(image));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<Image>> listImages(){
        return ResponseEntity.ok(imageService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Image> updateImage(@RequestBody Image image) {
        ResponseEntity<Image> response;

        if (image.getId() != null && imageService.readImageById(image.getId()).isPresent()) {
            response = ResponseEntity.ok(imageService.updateImage(image));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (imageService.readImageById(id).isPresent()) {
            imageService.deleteImage(id);
            response = ResponseEntity.ok("Image successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
