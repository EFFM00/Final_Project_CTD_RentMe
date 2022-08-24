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
@Table(name = "characteristics")
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "characteristic", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<CharacteristicXProduct> characteristicsXProducts = new HashSet<>();

    public Characteristic() {
    }

    public Characteristic(String description, Set<CharacteristicXProduct> characteristicsXProducts) {
        this.description = description;
        this.characteristicsXProducts = characteristicsXProducts;
    }
}
