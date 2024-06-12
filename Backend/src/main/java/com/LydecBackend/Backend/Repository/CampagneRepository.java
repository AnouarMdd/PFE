package com.LydecBackend.Backend.Repository;

import com.LydecBackend.Backend.Model.Campagne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampagneRepository extends JpaRepository<Campagne,Long> {
}
