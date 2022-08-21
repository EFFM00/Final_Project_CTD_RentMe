package com.booking.dh.service;

import com.booking.dh.model.Image;
import com.booking.dh.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public Image createImage(Image image) {
        return imageRepository.save(image);
    }

    public Optional<Image> readImageById(Long id){
        return imageRepository.findById(id);
    }

    public List<Image> readAll() {
        return imageRepository.findAll();
    }

    public Image updateImage(Image image) {
        if(readImageById(image.getId()).isPresent()){
            return imageRepository.save(image);
        }else{
            return null;
        }
    }

    public void deleteImage(Long id) {
        imageRepository.deleteById(id);
    }
}
