package com.LydecBackend.Backend.controller;

import com.LydecBackend.Backend.Model.Campagne;
import com.LydecBackend.Backend.Repository.CampagneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/campagnes")
public class CampagneController {
    @Autowired
    CampagneRepository campagneRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addCampagne(@RequestBody Campagne campagne) {
        try {
            campagne.setCategory("Initialise");
            Campagne savedCampagne = campagneRepository.save(campagne);
            return new ResponseEntity<>(savedCampagne, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add Campagne.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCampagne(@RequestBody Campagne campagne) {
        try {
            Campagne existingCampagne = campagneRepository.findById(campagne.getId_campagne()).orElse(null);
            if (existingCampagne == null) {
                return new ResponseEntity<>("Campagne not found.", HttpStatus.NOT_FOUND);
            }
                existingCampagne.setCategory(campagne.getCategory());

            Campagne updatedCampagne = campagneRepository.save(existingCampagne);
            return new ResponseEntity<>(updatedCampagne, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update Campagne.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllCampagnes() {
        try {
            List<Campagne> campagnes = campagneRepository.findAll();
            if (campagnes.isEmpty()) {
                return new ResponseEntity<>("No campagnes found.", HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(campagnes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to retrieve campagnes.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getOneCampagne(@PathVariable Long id) {
        try {
            Optional<Campagne> campagne = campagneRepository.findById(id);
            if (campagne.isEmpty()) {
                return new ResponseEntity<>("No campagne found.", HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(campagne.get(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to retrieve campagne.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCampagneById(@PathVariable Long id) {
        try {
            // Check if the campagne exists
            if (!campagneRepository.existsById(id)) {
                return new ResponseEntity<>("Campagne not found.", HttpStatus.NOT_FOUND);
            }

            // If the campagne exists, delete it
            campagneRepository.deleteById(id);

            return new ResponseEntity<>("Campagne deleted successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete campagne.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Campagne> updateCampagne(@PathVariable Long id, @RequestBody Campagne updatedCampagne) {
        Optional<Campagne> optionalCampagne = campagneRepository.findById(id);
        if (optionalCampagne.isPresent()) {
            Campagne existingCampagne = optionalCampagne.get();
            existingCampagne.setId_type_campagne(updatedCampagne.getId_type_campagne());
            existingCampagne.setId_etat_campagne(updatedCampagne.getId_etat_campagne());
            existingCampagne.setNom_campagne(updatedCampagne.getNom_campagne());
            existingCampagne.setDate_debut(updatedCampagne.getDate_debut());
            existingCampagne.setDate_fin(updatedCampagne.getDate_fin());
            existingCampagne.setDescription_campagne(updatedCampagne.getDescription_campagne());
            existingCampagne.setCategory(updatedCampagne.getCategory());
            existingCampagne.setStations(updatedCampagne.getStations());

            Campagne savedCampagne = campagneRepository.save(existingCampagne);
            return ResponseEntity.ok(savedCampagne);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
