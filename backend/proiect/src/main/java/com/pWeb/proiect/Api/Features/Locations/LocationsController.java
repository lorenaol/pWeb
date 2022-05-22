package com.pWeb.proiect.Api.Features.Locations;

import com.pWeb.proiect.Core.DataModel.MyLocation;
import com.pWeb.proiect.Core.Domain.UserLocation.LocationService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/locations")
public class LocationsController {

    @Autowired
    private LocationService locationService;

    @GetMapping
    public List<MyLocation> getLocations() {
        return locationService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<MyLocation> getLocation(@PathVariable Long id) {
        return locationService.getLocation(id);
    }

    @GetMapping(path = "/findByUser")
    public List<MyLocation> getLocationByUser(@RequestParam(value = "user") Long id) throws NotFoundException {
        return  locationService.findByUser(id);
    }

    @PostMapping
    public MyLocation addLocation(@RequestBody MyLocation location) {
        MyLocation l = null;
        if (location != null) {
            l = locationService.addLocation(location);
        }
        return l;
    }


    @PutMapping
    @ResponseBody
    public MyLocation updateLocation(@RequestBody MyLocation location) {
        return locationService.updateLocation(location);
    }

    @DeleteMapping
    public void deleteLocation(@RequestBody MyLocation location) {
        locationService.deleteLocation(location);
    }
}
