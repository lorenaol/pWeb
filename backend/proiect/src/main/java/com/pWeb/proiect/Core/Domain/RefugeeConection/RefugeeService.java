package com.pWeb.proiect.Core.Domain.RefugeeConection;

import com.pWeb.proiect.Core.DataModel.Connection;
import com.pWeb.proiect.Core.DataModel.Refugee;

import java.util.List;

public interface RefugeeService {

    public List<Refugee> getAll();

    public Refugee addRefugee( Refugee refugee);

    public Refugee updateRefugee( Refugee refugee);

    public void deleteRefugee( Refugee refugee);

    public List<Refugee> getAllNotAccepted(Long nr);
}
