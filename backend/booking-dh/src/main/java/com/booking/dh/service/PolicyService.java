package com.booking.dh.service;

import com.booking.dh.model.Policy;
import com.booking.dh.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    @Autowired
    PolicyRepository policyRepository;

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
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
