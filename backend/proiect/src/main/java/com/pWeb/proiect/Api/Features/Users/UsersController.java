package com.pWeb.proiect.Api.Features.Users;

import com.pWeb.proiect.Core.DataModel.User;
import com.pWeb.proiect.Core.Domain.UserLocation.UserService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/users")
public class UsersController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.getAll();
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        User u = null;
        if (user != null) {
            u = userService.addUser(user);
        }
        return u;
    }


    @GetMapping(path = "/findByEmail")
    public User getUserByName(@RequestParam(value = "email") String email) throws NotFoundException {
        return  userService.findByEmail(email);
    }

    @PutMapping
    @ResponseBody
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping
    public void deleteUser(@RequestBody User user) {
        userService.deleteUser(user);
    }

}
