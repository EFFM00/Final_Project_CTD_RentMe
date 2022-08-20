package com.booking.dh.model;

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
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private Double longitude;
    @Column(nullable = false)
    private Double latitude;
    @Column(nullable = false)
    private Double price;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<CharacteristicsXProduct> characteristicsXProductOfProduct;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categories_id")
    private Category category;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Image> images = new HashSet<>();

    public Product() {
    }

    public Product(String title, String description, String address, Double longitude, Double latitude, Double price, Set<CharacteristicsXProduct> characteristicsXProductOfProduct, Category category, Set<Image> images) {
        this.title = title;
        this.description = description;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.price = price;
        this.characteristicsXProductOfProduct = characteristicsXProductOfProduct;
        this.category = category;
        this.images = images;
    }
}
