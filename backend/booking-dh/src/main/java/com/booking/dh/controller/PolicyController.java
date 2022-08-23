package com.booking.dh.controller;

import com.booking.dh.model.Policy;
import com.booking.dh.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policies")
public class PolicyController {

    @Autowired
    PolicyService policyService;

    @PostMapping("/add")
    public ResponseEntity<Policy> addPolicy(@RequestBody Policy policy) {
        return ResponseEntity.ok(policyService.createPolicy(policy));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Policy> findPolicyById(@PathVariable Long id) {
        if(policyService.readPolicyById(id).isPresent()){
            return ResponseEntity.ok(policyService.readPolicyById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Policy>> listPolicies(){
        return ResponseEntity.ok(policyService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Policy> updatePolicy(@RequestBody Policy policy) {
        ResponseEntity<Policy> response;

        if (policy.getId() != null && policyService.readPolicyById(policy.getId()).isPresent()) {
            response = ResponseEntity.ok(policyService.updatePolicy(policy));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePolicy(@PathVariable Long id) {
        ResponseEntity<String> response;

        if (policyService.readPolicyById(id).isPresent()) {
            policyService.deletePolicy(id);
            response = ResponseEntity.ok("Policy successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
