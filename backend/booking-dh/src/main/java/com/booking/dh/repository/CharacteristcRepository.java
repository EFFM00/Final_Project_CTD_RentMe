package com.booking.dh.repository;

import com.booking.dh.model.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacteristcRepository extends JpaRepository<Characteristic, Long> {
}
