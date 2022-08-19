package com.booking.dh.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Setter
@Getter

@ToString
@Entity
@Table(name = "characteristics")
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "num_bedrooms", nullable = false)
    private Integer numBedrooms;

    @Column(name = "num_bathrooms", nullable = false)
    private Integer numBathrooms;

    @Column(name = "num_beds", nullable = false)
    private Integer numBeds;

    @Column(name = "has_pool", nullable = false)
    private Boolean hasPool;

    @Column(name = "has_kitchen", nullable = false)
    private Boolean hasKitchen;

    @Column(name = "has_parking", nullable = false)
    private Boolean hasParking;

    @Column(name = "has_grill", nullable = false)
    private Boolean hasGrill;

    @Column(name = "has_chimney", nullable = false)
    private Boolean hasChimney;

    @Column(name = "has_wifi", nullable = false)
    private Boolean hasWifi;

    @Column(name = "has_air_conditioner", nullable = false)
    private Boolean hasAirConditioner;

    @Column(name = "has_heating", nullable = false)
    private Boolean hasHeating;

    @Column(name = "has_washer", nullable = false)
    private Boolean hasWasher;

    @Column(name = "has_gym", nullable = false)
    private Boolean hasGym;

    @Column(name = "has_tv", nullable = false)
    private Boolean hasTv;

    @Column(name = "has_linens", nullable = false)
    private Boolean hasLinens;

    @Column(name = "has_fridge", nullable = false)
    private Boolean hasFridge;

    @Column(name = "has_basics_cookwares", nullable = false)
    private Boolean hasBasicsCookwares;

    @Column(name = "has_hammocks", nullable = false)
    private Boolean hasHammocks;

    @Column(name = "allows_pets", nullable = false)
    private Boolean allowsPets;

    public Characteristic() {
    }

    public Characteristic(Integer numBedrooms, Integer numBathrooms, Integer numBeds, Boolean hasPool, Boolean hasKitchen, Boolean hasParking, Boolean hasGrill, Boolean hasChimney, Boolean hasWifi, Boolean hasAirConditioner, Boolean hasHeating, Boolean hasWasher, Boolean hasGym, Boolean hasTv, Boolean hasLinens, Boolean hasFridge, Boolean hasBasicsCookwares, Boolean hasHammocks, Boolean allowsPets) {
        this.numBedrooms = numBedrooms;
        this.numBathrooms = numBathrooms;
        this.numBeds = numBeds;
        this.hasPool = hasPool;
        this.hasKitchen = hasKitchen;
        this.hasParking = hasParking;
        this.hasGrill = hasGrill;
        this.hasChimney = hasChimney;
        this.hasWifi = hasWifi;
        this.hasAirConditioner = hasAirConditioner;
        this.hasHeating = hasHeating;
        this.hasWasher = hasWasher;
        this.hasGym = hasGym;
        this.hasTv = hasTv;
        this.hasLinens = hasLinens;
        this.hasFridge = hasFridge;
        this.hasBasicsCookwares = hasBasicsCookwares;
        this.hasHammocks = hasHammocks;
        this.allowsPets = allowsPets;
    }
}
