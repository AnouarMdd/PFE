package com.LydecBackend.Backend.Repository;

import com.LydecBackend.Backend.Model.Station;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StationRepository extends JpaRepository<Station,Long> {
}
