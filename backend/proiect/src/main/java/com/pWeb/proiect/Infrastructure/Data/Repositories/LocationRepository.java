package com.pWeb.proiect.Infrastructure.Data.Repositories;


import com.pWeb.proiect.Core.DataModel.MyLocation;
import com.pWeb.proiect.Core.DataModel.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<MyLocation, Long> {
    @Query("select l from MyLocation l where l.user.id = :id")
    public List<MyLocation> findByUser(Long id);
//    Location find(Long id);
}
