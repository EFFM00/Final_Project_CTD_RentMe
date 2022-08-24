package com.booking.dh.service;

import com.booking.dh.model.PolicyXProduct;
import com.booking.dh.repository.PolicyXProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyXProductService {

    @Autowired
    PolicyXProductRepository policyXProductRepository;

    public PolicyXProduct createPolicyXProduct(PolicyXProduct policyXProduct) {
        return policyXProductRepository.save(policyXProduct);
    }

    public Optional<PolicyXProduct> readPolicyXProductById(Long id){
        return policyXProductRepository.findById(id);
    }

    public List<PolicyXProduct> readAll() {
        return policyXProductRepository.findAll();
    }

    public PolicyXProduct updatePolicyXProduct(PolicyXProduct policyXProduct) {
        if(readPolicyXProductById(policyXProduct.getId()).isPresent()){
            return policyXProductRepository.save(policyXProduct);
        }else{
            return null;
        }
    }

    public void deletePolicyXProduct(Long id) {
        policyXProductRepository.deleteById(id);
    }

}
