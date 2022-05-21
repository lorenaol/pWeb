package com.pWeb.proiect.Infrastructure.Data.Repositories;

import com.pWeb.proiect.Core.DataModel.Refugee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefugeeRepository extends JpaRepository<Refugee, Long> {
}
