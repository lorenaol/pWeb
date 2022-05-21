package com.pWeb.proiect.Api.Features.Users;

import com.pWeb.proiect.Core.Domain.UserLocation.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/users")
public class UsersController {
    @Autowired
    private UserService userService;
}
