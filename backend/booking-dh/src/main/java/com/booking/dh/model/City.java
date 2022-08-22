package com.booking.dh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@ToString

@Entity
@Table(name = "cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String country;

    @JsonIgnore
    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();

    public City() {
    }

    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }
}


