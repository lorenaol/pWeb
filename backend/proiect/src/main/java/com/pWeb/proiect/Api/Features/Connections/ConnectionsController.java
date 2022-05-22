package com.pWeb.proiect.Api.Features.Connections;

import com.pWeb.proiect.Core.DataModel.Connection;
import com.pWeb.proiect.Core.DataModel.Refugee;
import com.pWeb.proiect.Core.DataModel.User;
import com.pWeb.proiect.Core.Domain.RefugeeConection.ConnectionService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/connections")
public class ConnectionsController {

    @Autowired
    private ConnectionService connectionService;

    @GetMapping
    public List<Connection> getConnections() {
        return connectionService.getAll();
    }


    @GetMapping("/refugee/{id}")
    public Connection getRefugeesNotAccepted(@PathVariable Long id) {
        return connectionService.getConnectRefugee(id);
    }

    @GetMapping("/{id}")
    public Optional<Connection> getConnection(@PathVariable Long id) {
        return connectionService.find(id);
    }

    @PostMapping
    public Connection addConnection(@RequestBody Connection connection) {
        Connection c = null;
        if (connection != null) {
            c = connectionService.addConnection(connection);
        }
        return c;
    }


    @PutMapping
    @ResponseBody
    public Connection updateConnection(@RequestBody Connection connection) {
        return connectionService.updateConnection(connection);
    }

    @DeleteMapping
    public void deleteConnection(@RequestBody Connection connection) {
        connectionService.deleteConnection(connection);
    }
}
