package com.booking.dh.controller;

import com.booking.dh.model.Category;
import com.booking.dh.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.createCategory(category));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Category>> listCategories(){
        return ResponseEntity.ok(categoryService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) {
        ResponseEntity<Category> response = null;

        if (category.getId() != null && categoryService.readCategoryById(category.getId()).isPresent())
            response = ResponseEntity.ok(categoryService.updateCategory(category));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        ResponseEntity<String> response = null;

        if (categoryService.readCategoryById(id).isPresent()) {
            categoryService.deleteCategory(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Category successfully removed.");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
