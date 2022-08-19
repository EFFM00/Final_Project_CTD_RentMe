package com.booking.dh.service;

import com.booking.dh.model.Product;
import com.booking.dh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product addProduct (Product product){return productRepository.save(product);}

    public Optional<Product> findProductById(Long id){return productRepository.findById(id);}

    public Product returnProduct(Long id){
        if(findProductById(id).isPresent()){
            return productRepository.getById(id);
        }else{
            return null;
        }
    }

    public List<Product> productList(){return productRepository.findAll();}

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
}
