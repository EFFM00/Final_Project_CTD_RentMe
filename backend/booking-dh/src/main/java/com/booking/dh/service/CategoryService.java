package com.booking.dh.service;

import com.booking.dh.model.Category;
import com.booking.dh.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> readCategoryById(Long id){
        return categoryRepository.findById(id);
    }

    public List<Category> readAll() {
        return categoryRepository.findAll();
    }

    public Category updateCategory(Category category) {
        if(readCategoryById(category.getId()).isPresent()){
            return categoryRepository.save(category);
        }else{
            return null;
        }
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

}
