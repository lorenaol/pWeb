package com.pWeb.proiect.Api.Features.Connections;

import com.pWeb.proiect.Core.Domain.RefugeeConection.ConnectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/connections")
public class ConnectionsController {

    @Autowired
    private ConnectionService connectionService;
}
