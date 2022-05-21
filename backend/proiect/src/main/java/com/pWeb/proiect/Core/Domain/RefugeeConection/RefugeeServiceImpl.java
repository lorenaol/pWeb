package com.pWeb.proiect.Core.Domain.RefugeeConection;

import com.pWeb.proiect.Infrastructure.Data.Repositories.RefugeeRepository;
import com.pWeb.proiect.Infrastructure.Data.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RefugeeServiceImpl implements RefugeeService{

    @Autowired
    private RefugeeRepository refugeeRepository;
}
