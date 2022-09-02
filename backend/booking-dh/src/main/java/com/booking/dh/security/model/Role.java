package com.booking.dh.security.model;

import com.booking.dh.security.enums.RoleName;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RoleName name;

    @JsonIgnoreProperties({"role"})
    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<BookingUser> bookingUsers = new HashSet<>();

    public Role() {
    }

    public Role(RoleName name) {
        this.name = name;
    }
}
