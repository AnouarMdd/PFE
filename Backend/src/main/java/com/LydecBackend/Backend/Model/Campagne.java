package com.LydecBackend.Backend.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Campagne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_campagne;
    private String id_type_campagne;
    private Short id_etat_campagne;
    private String nom_campagne;
    private java.sql.Date date_debut;
    private java.sql.Date date_fin;
    private String description_campagne;
    private String category;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
            name = "Campagne_Station",
            joinColumns = @JoinColumn(name = "campagne_id"),
            inverseJoinColumns = @JoinColumn(name = "station_id")
    )

    private Set<Station> stations;
}
