package com.booking.dh.controller;

import com.booking.dh.model.Product;
import com.booking.dh.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.addProduct(product));
    }

    @GetMapping("/{id}")
    public Product returnProduct (@PathVariable(value = "id") Long id){
        return productService.returnProduct(id);
    }

    @GetMapping
    public ResponseEntity<List<Product>> productList(){
        return ResponseEntity.ok(productService.productList());
    }

    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        ResponseEntity<Product> response;

        if (product.getId() != null && productService.findProductById(product.getId()).isPresent()) {
            response = ResponseEntity.ok(productService.editProduct(product));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (productService.findProductById(id).isPresent()) {
            productService.deleteProduct(id);
            response = ResponseEntity.ok("Product successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @GetMapping("/home")
    public List<Product> randomProductList() {
        return productService.randomProductList();
    }
}
