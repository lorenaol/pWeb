package com.pWeb.proiect.Infrastructure.Data.Repositories;


import com.pWeb.proiect.Core.DataModel.Connection;
import com.pWeb.proiect.Core.DataModel.Refugee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConnectionRepository extends JpaRepository<Connection, Long> {

    @Query(nativeQuery = true,value = "select * from my_connections where refugee_id = :nr")
    Connection getConnectRefugee(@Param("nr") Long nr);

}
