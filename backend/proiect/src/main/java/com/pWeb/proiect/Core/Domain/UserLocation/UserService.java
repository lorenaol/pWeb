package com.pWeb.proiect.Core.Domain.UserLocation;

import com.pWeb.proiect.Core.DataModel.User;

import java.util.List;

public interface UserService {

    public List<User> getAll();

    public User findByEmail(String email);

    public User addUser( User user);

    public User updateUser(User user);

    public void deleteUser( User user);
}
