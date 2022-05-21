package com.pWeb.proiect.Core.Domain.RefugeeConection;

import com.pWeb.proiect.Infrastructure.Data.Repositories.ConnectionRepository;
import com.pWeb.proiect.Infrastructure.Data.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConnectionsServiceImpl implements ConnectionService{

    @Autowired
    private ConnectionRepository connectionRepository;
}
