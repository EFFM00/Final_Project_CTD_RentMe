package com.booking.dh.service;

import com.booking.dh.model.Product;
import com.booking.dh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product addProduct (Product product){
        return productRepository.save(product);
    }

    public Optional<Product> findProductById(Long id){
        return productRepository.findById(id);
    }

    public List<Product> findProductByCityId(Long id){
        List<Product> productsByCity = productRepository.findProductByCityId(id);
        return productsByCity;
    }

    public List<Product> findProductByCategoryId(Long id){
        List<Product> productsByCategory = productRepository.findProductByCategoryId(id);
        return productsByCategory;
    }

    public List<Product> productList(){
        return productRepository.findAll();
    }

    public Product editProduct(Product product){
        if (findProductById(product.getId()).isPresent()){
            return productRepository.save(product);
        }else{
            return null;
        }
    }

    public void deleteProduct(Long id){
        if (findProductById(id).isPresent()){
            productRepository.deleteById(id);
        }
    }

    public List<Product> randomProductList(){
        List<Product> list = productRepository.findAll();
        Collections.shuffle(list);
        return list;
    }

    public List<Product> findByCityAndDates(Long id, LocalDate wantedCheckInDate, LocalDate wantedCheckOutDate) {
        List<Product> productsList = productRepository.findProductsByCityAndDates(id, wantedCheckInDate, wantedCheckOutDate);
        return productsList;
    }

    public List<Product> findByDates(LocalDate wantedCheckInDate, LocalDate wantedCheckOutDate) {
        List<Product> productsList = productRepository.findProductsByDates(wantedCheckInDate, wantedCheckOutDate);
        return productsList;
    }
}
