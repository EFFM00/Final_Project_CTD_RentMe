package com.booking.dh.controller;

import com.booking.dh.model.PolicyXProduct;
import com.booking.dh.service.PolicyXProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-polices")
public class PolicyXProductController {

    @Autowired
    PolicyXProductService policyXProductService;

    @PostMapping("/add")
    public ResponseEntity<PolicyXProduct> addProductPolicy(@RequestBody PolicyXProduct policyXProduct) {
        return ResponseEntity.ok(policyXProductService.createPolicyXProduct(policyXProduct));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PolicyXProduct> findProductPolicyById(@PathVariable Long id) {
        if(policyXProductService.readPolicyXProductById(id).isPresent()){
            return ResponseEntity.ok(policyXProductService.readPolicyXProductById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<PolicyXProduct>> listProductPolices(){
        return ResponseEntity.ok(policyXProductService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<PolicyXProduct> updateProductPolicy(@RequestBody PolicyXProduct policyXProduct) {
        ResponseEntity<PolicyXProduct> response;

        if (policyXProduct.getId() != null && policyXProductService.readPolicyXProductById(policyXProduct.getId()).isPresent()) {
            response = ResponseEntity.ok(policyXProductService.updatePolicyXProduct(policyXProduct));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProductPolicy(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (policyXProductService.readPolicyXProductById(id).isPresent()) {
            policyXProductService.deletePolicyXProduct(id);
            response = ResponseEntity.ok("Product policy successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
