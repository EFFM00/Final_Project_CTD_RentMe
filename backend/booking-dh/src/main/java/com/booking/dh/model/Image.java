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
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;

    public Image() {
    }

    public Image(String title, String url) {
        this.title = title;
        this.url = url;
    }
}
