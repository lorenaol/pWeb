package com.pWeb.proiect.Core.DataModel;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder

@Entity
@Table(name = "connections")
public class Connection {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "connections_seq")
    @SequenceGenerator(name = "connections_seq", allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "refugee_id", referencedColumnName = "id", nullable = false)
    private Refugee refugee;

    @ManyToOne
    @JoinColumn(name = "location_id", referencedColumnName = "id", nullable = false)
    private Location location;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Refugee getRefugee() {
        return refugee;
    }

    public void setRefugee(Refugee refugee) {
        this.refugee = refugee;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
