package com.booking.dh.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Setter
@Getter
@ToString

@Entity
@Table(name = "characteristics_x_product")
public class CharacteristicsXProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "characteristicsXProductOfCharacteristic")
    private Characteristic characteristic;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "characteristicsXProductOfProduct")
    private Product product;

    public CharacteristicsXProduct() {
    }

    public CharacteristicsXProduct(Characteristic characteristic, Product product) {
        this.characteristic = characteristic;
        this.product = product;
    }
}
