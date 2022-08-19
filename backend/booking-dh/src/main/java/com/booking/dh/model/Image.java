package com.booking.dh.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Setter
@Getter

@ToString
@Entity
@Table(name = "images")
public class
Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "products_id")
    private Product product;

    public Image() {
    }

    public Image(String title, String url, Product product) {
        this.title = title;
        this.url = url;
        this.product = product;
    }
}
