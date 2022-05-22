package com.pWeb.proiect.Core.Domain.RefugeeConection;

import com.pWeb.proiect.Core.DataModel.Connection;

import java.util.List;
import java.util.Optional;

public interface ConnectionService {

    public List<Connection> getAll();

    public Connection getConnectRefugee(Long id);

    public Connection addConnection( Connection connection);

    public Connection updateConnection( Connection connection);

    public void deleteConnection( Connection connection);

    public Optional<Connection> find(Long id);
}
