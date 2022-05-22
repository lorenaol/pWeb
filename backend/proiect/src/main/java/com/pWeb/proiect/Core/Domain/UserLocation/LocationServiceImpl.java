package com.pWeb.proiect.Core.Domain.UserLocation;

import com.pWeb.proiect.Core.DataModel.MyLocation;
import com.pWeb.proiect.Core.DataModel.User;
import com.pWeb.proiect.Infrastructure.Data.Repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    private LocationRepository locationRepository;

    @Override
    public List<MyLocation> getAll() {
        return locationRepository.findAll();
    }

    @Override
    public Optional<MyLocation> getLocation(Long id) {
        return locationRepository.findById(id);
    }

    @Override
    public MyLocation addLocation(MyLocation location) {
        return locationRepository.save(location);
    }

    @Override
    public MyLocation updateLocation(MyLocation location) {
        return locationRepository.save(location);
    }

    @Override
    public void deleteLocation(MyLocation location) {
        locationRepository.delete(location);
    }

    @Override
    public List<MyLocation> findByUser(Long id) {
        return locationRepository.findByUser(id);
    }
}
