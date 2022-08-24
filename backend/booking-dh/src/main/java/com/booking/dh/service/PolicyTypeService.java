package com.booking.dh.service;

import com.booking.dh.model.PolicyType;
import com.booking.dh.repository.PolicyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyTypeService {

    @Autowired
    PolicyTypeRepository policyTypeRepository;

    public PolicyType createPolicyType(PolicyType policyType) {
        return policyTypeRepository.save(policyType);
    }

    public Optional<PolicyType> readPolicyTypeById(Long id){
        return policyTypeRepository.findById(id);
    }

    public List<PolicyType> readAll() {
        return policyTypeRepository.findAll();
    }

    public PolicyType updatePolicyType(PolicyType policyType) {
        if(readPolicyTypeById(policyType.getId()).isPresent()){
            return policyTypeRepository.save(policyType);
        }else{
            return null;
        }
    }

    public void deletePolicyType(Long id) {
        policyTypeRepository.deleteById(id);
    }
}
