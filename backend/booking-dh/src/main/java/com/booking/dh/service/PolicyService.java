package com.booking.dh.service;

import com.booking.dh.model.Policy;
import com.booking.dh.model.PolicyType;
import com.booking.dh.model.Product;
import com.booking.dh.repository.PolicyRepository;
import com.booking.dh.repository.PolicyTypeRepository;
import com.booking.dh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    @Autowired
    PolicyRepository policyRepository;

    @Autowired
    PolicyTypeRepository policyTypeRepository;

    @Autowired
    ProductRepository productRepository;

    public Policy createPolicy(Policy policy) {
        Optional<PolicyType> policyType = policyTypeRepository.findById(policy.getPolicyType().getId());
        Optional<Product> product = productRepository.findById(policy.getProduct().getId());

        if(policyType.isPresent() && product.isPresent()){
            return policyRepository.save(policy);
        } else {
            return null;
        }
    }

    public Optional<Policy> readPolicyById(Long id){
        return policyRepository.findById(id);
    }

    public List<Policy> readAll() {
        return policyRepository.findAll();
    }

    public Policy updatePolicy(Policy policy) {
        if(readPolicyById(policy.getId()).isPresent()){
            return policyRepository.save(policy);
        }else{
            return null;
        }
    }

    public void deletePolicy(Long id) {
        policyRepository.deleteById(id);
    }


}
