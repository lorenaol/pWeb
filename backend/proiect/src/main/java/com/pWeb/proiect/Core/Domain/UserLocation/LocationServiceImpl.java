package com.pWeb.proiect.Core.Domain.UserLocation;

import com.pWeb.proiect.Infrastructure.Data.Repositories.LocationRepository;
import com.pWeb.proiect.Infrastructure.Data.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    private LocationRepository locationRepository;
}
