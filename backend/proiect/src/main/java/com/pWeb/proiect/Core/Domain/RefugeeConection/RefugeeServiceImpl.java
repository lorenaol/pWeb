package com.pWeb.proiect.Core.Domain.RefugeeConection;

import com.pWeb.proiect.Core.DataModel.Refugee;
import com.pWeb.proiect.Infrastructure.Data.Repositories.RefugeeRepository;
import com.pWeb.proiect.Infrastructure.Data.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RefugeeServiceImpl implements RefugeeService{

    @Autowired
    private RefugeeRepository refugeeRepository;

    @Override
    public List<Refugee> getAll() {
        return refugeeRepository.findAll();
    }

    @Override
    public List<Refugee> getAllNotAccepted(Long nr){
        return refugeeRepository.findAllANotAccepted(nr);
    }

    @Override
    public Refugee addRefugee(Refugee refugee) {
        return refugeeRepository.save(refugee);
    }

    @Override
    public Refugee updateRefugee(Refugee refugee) {
        return refugeeRepository.save(refugee);
    }

    @Override
    public void deleteRefugee(Refugee refugee) {
        refugeeRepository.delete(refugee);
    }
}
