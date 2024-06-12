package com.LydecBackend.Backend.Model;

import jakarta.persistence.*;

import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     Long id_station;
     Long id_zone;
     Long id_plage;
     Long id_position_station;
     Long id_delegation;
     Long id_etat_station;
     String code_station;
     String ref_station;
     String commentaire_station;
     String emplacement_station;
     Double latitude;
     Double longitude;

 @ManyToMany(mappedBy = "stations")
 private Set<Campagne> campagnes;
}
