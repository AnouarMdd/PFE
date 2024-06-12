package com.LydecBackend.Backend.controller;

import com.LydecBackend.Backend.Model.Station;
import com.LydecBackend.Backend.Repository.StationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/stations")
public class StationController {
    @Autowired
    StationRepository stationRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addStation(@RequestBody Station station) {
        try {
            Station savedStation = stationRepository.save(station);
            return new ResponseEntity<>(savedStation, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add station.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllStations() {
        try {
            return new ResponseEntity<>(stationRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to retrieve stations.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateStation(@PathVariable Long id, @RequestBody Station updatedStation) {
        Optional<Station> optionalStation = stationRepository.findById(id);
        if (optionalStation.isPresent()) {
            Station existingStation = optionalStation.get();
            existingStation.setCode_station(updatedStation.getCode_station());
            existingStation.setCommentaire_station(updatedStation.getCommentaire_station());
            // Update other fields as necessary
            try {
                Station savedStation = stationRepository.save(existingStation);
                return new ResponseEntity<>(savedStation, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>("Failed to update station.", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>("Station not found.", HttpStatus.NOT_FOUND);
        }
    }
}
