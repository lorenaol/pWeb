package com.pWeb.proiect.Infrastructure.Data.Repositories;

import com.pWeb.proiect.Core.DataModel.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findByEmail(String email);
}
