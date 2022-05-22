package com.pWeb.proiect.Api.Features.Refugees;

import com.pWeb.proiect.Core.DataModel.Refugee;
import com.pWeb.proiect.Core.DataModel.User;
import com.pWeb.proiect.Core.Domain.RefugeeConection.RefugeeService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/refugees")
public class RefugeesController {

    @Autowired
    private RefugeeService refugeeService;

    @GetMapping("/not_accepted/{nr}")
    public List<Refugee> getRefugeesNotAccepted(@PathVariable Long nr) {
        return refugeeService.getAllNotAccepted(nr);
    }

    @GetMapping
    public List<Refugee> getRefugees() {
        return refugeeService.getAll();
    }

    @PostMapping
    public Refugee addRefugee(@RequestBody Refugee refugee) {
        Refugee r = null;
        if (refugee != null) {
            r = refugeeService.addRefugee(refugee);
        }
        return r;
    }

    @PutMapping
    @ResponseBody
    public Refugee updateRefugee(@RequestBody Refugee refugee) {
        return refugeeService.updateRefugee(refugee);
    }

    @DeleteMapping
    public void deleteRefugee(@RequestBody Refugee refugee) {
        refugeeService.deleteRefugee(refugee);
    }
}
