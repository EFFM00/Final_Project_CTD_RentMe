package com.booking.dh.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
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

    @OneToMany(mappedBy = "characteristic", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<CharacteristicsXProduct> characteristicsXProductOfCharacteristic;

    public Characteristic() {
    }

    public Characteristic(String description, Set<CharacteristicsXProduct> characteristicsXProductOfCharacteristic) {
        this.description = description;
        this.characteristicsXProductOfCharacteristic = characteristicsXProductOfCharacteristic;
    }
}
