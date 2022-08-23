package com.booking.dh.repository;

import com.booking.dh.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findProductByCityId(Long id);
    List<Product> findProductByCategoryId(Long id);
}
