package com.pWeb.proiect.Infrastructure.Data.Repositories;


import com.pWeb.proiect.Core.DataModel.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
