package com.booking.dh.controller;

import com.booking.dh.model.Product;
import com.booking.dh.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    public ProductService productService;

    @Autowired
    public ProductController() {
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {return productService.addProduct(product);}

    @GetMapping("/{id}")
    public Product returnProduct (@PathVariable(value = "id") Long id){
        return productService.returnProduct(id);
    }

    @GetMapping
    public List<Product> productList(){return productService.productList();}

    @PutMapping("/{id}")
    public Product editProduct(@RequestBody Product product){return productService.editProduct(product);}

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable(value = "id") Long id){productService.deleteProduct(id);}

    @GetMapping("/home")
    public List<Product> randomProductList() {return productService.randomProductList();}
}
