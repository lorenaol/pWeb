package com.pWeb.proiect.Core.Domain.RefugeeConection;

import com.pWeb.proiect.Core.DataModel.Connection;
import com.pWeb.proiect.Infrastructure.Data.Repositories.ConnectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConnectionsServiceImpl implements ConnectionService{

    @Autowired
    private ConnectionRepository connectionRepository;

    @Override
    public List<Connection> getAll() {
        return connectionRepository.findAll();
    }

    @Override
    public Connection getConnectRefugee(Long id){
        return connectionRepository.getConnectRefugee(id);
    }
    @Override
    public Optional<Connection> find(Long id){
        return connectionRepository.findById(id);
    }

    @Override
    public Connection addConnection(Connection connection) {
        return connectionRepository.save(connection);
    }

    @Override
    public Connection updateConnection(Connection connection) {
        return connectionRepository.save(connection);
    }

    @Override
    public void deleteConnection(Connection connection) {
        connectionRepository.delete(connection);
    }
}
