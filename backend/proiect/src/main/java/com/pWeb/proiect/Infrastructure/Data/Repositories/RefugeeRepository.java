package com.pWeb.proiect.Infrastructure.Data.Repositories;

import com.pWeb.proiect.Core.DataModel.Refugee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RefugeeRepository extends JpaRepository<Refugee, Long> {

    @Query(nativeQuery = true,value = "select * from refugees where accepted is false and nr <= :nr")
    List<Refugee> findAllANotAccepted(@Param("nr") Long nr);
}
