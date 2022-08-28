package com.booking.dh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.tomcat.jni.Time;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@ToString

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_start", nullable = false)
    private Date dateStart;

    @Column(name = "date_end", nullable = false)
    private Date dateEnd;

    @JsonIgnore
    @OneToMany(mappedBy = "booking", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<BookingXProduct> bookingXProduct = new HashSet<>();

    public Booking() {
    }

    public Booking(Date dateStart, Date dateEnd, Set<BookingXProduct> bookingXProduct) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.bookingXProduct = bookingXProduct;
    }
}
