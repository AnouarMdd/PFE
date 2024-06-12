package com.LydecBackend.Backend.controller;

import com.LydecBackend.Backend.Model.Planning;
import com.LydecBackend.Backend.Repository.PlanningRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/planning")
public class PlanningController {

    @Autowired
    PlanningRepository planningRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addPlanning(@RequestBody Planning planning) {
        try {
            Planning savedPlanning = planningRepository.save(planning);
            return new ResponseEntity<>(savedPlanning, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add Planning.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllPlannings() {
        try {
            List<Planning> plannings = planningRepository.findAll();
            if (plannings.isEmpty()) {
                return new ResponseEntity<>("No planning found.", HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(plannings, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to retrieve planning.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}




