package com.LydecBackend.Backend.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data

public class Planning {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_planning")
    private Integer idPlanning;

    @Column(name = "id_campagne")
    private Integer idCampagne;

    @Column(name = "id_media")
    private Integer idMedia;

    @Column(name = "id_etat_planning")
    private Short idEtatPlanning;

    @Column(name = "nom_planning")
    private String nomPlanning;

    @Column(name = "date_debut_planning")
    private LocalDate dateDebutPlanning;

    @Column(name = "date_fin_planning")
    private LocalDate dateFinPlanning;

    @Column(name = "date_heure_import_planning")
    private LocalDateTime dateHeureImportPlanning;

    @Column(name = "nbre_total_lignes")
    private Integer nbreTotalLignes;

    @Column(name = "nbre_lignes_importees")
    private Integer nbreLignesImportees;

    @Column(name = "nbre_doublons")
    private Integer nbreDoublons;

    @Column(name = "nbre_stations")
    private Integer nbreStations;

    @Column(name = "nbre_plages")
    private Integer nbrePlages;

    @ManyToOne
    @JoinColumn(name = "id_campagne", referencedColumnName = "id_campagne", insertable = false, updatable = false)
    private Campagne campagne;
}
    /*
    @ManyToOne
    @JoinColumn(name = "id_etat_planning", referencedColumnName = "id_etat_planning", insertable = false, updatable = false)
    private EtatPlanning etatPlanning;*/



