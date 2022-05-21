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
@Table(name = "refugees")
public class Refugee {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "refugees_seq")
    @SequenceGenerator(name = "refugees_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone",  nullable = false)
    private String phone;

    @Column(name = "nr", nullable = false)
    private int nr;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getNr() {
        return nr;
    }

    public void setNr(int nr) {
        this.nr = nr;
    }
}
