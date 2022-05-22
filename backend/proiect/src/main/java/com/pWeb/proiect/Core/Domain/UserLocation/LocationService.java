package com.pWeb.proiect.Core.Domain.UserLocation;

import com.pWeb.proiect.Core.DataModel.MyLocation;
import com.pWeb.proiect.Core.DataModel.User;

import java.util.List;
import java.util.Optional;

public interface LocationService {

    public List<MyLocation> getAll();

    public MyLocation addLocation(MyLocation location);

    public Optional<MyLocation> getLocation(Long id);

    public MyLocation updateLocation(MyLocation location);

    public void deleteLocation( MyLocation location);

    public List<MyLocation> findByUser(Long id);
}
