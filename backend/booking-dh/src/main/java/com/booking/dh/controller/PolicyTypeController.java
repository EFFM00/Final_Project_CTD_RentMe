package com.booking.dh.controller;

import com.booking.dh.model.PolicyType;
import com.booking.dh.service.PolicyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policy-types")
public class PolicyTypeController {

    @Autowired
    PolicyTypeService policyTypeService;

    @PostMapping("/add")
    public ResponseEntity<PolicyType> addPolicyType(@RequestBody PolicyType policyType) {
        return ResponseEntity.ok(policyTypeService.createPolicyType(policyType));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PolicyType> findPolicyTypeById(@PathVariable Long id) {
        if(policyTypeService.readPolicyTypeById(id).isPresent()){
            return ResponseEntity.ok(policyTypeService.readPolicyTypeById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<PolicyType>> listPolicyTypes(){
        return ResponseEntity.ok(policyTypeService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<PolicyType> updatePolicyType(@RequestBody PolicyType policyType) {
        ResponseEntity<PolicyType> response;

        if (policyType.getId() != null && policyTypeService.readPolicyTypeById(policyType.getId()).isPresent()) {
            response = ResponseEntity.ok(policyTypeService.updatePolicyType(policyType));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePolicyType(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (policyTypeService.readPolicyTypeById(id).isPresent()) {
            policyTypeService.deletePolicyType(id);
            response = ResponseEntity.ok("Policy type successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
