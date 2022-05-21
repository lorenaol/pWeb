package com.pWeb.proiect.Api.Features.Refugees;

import com.pWeb.proiect.Core.Domain.RefugeeConection.RefugeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/refugees")
public class RefugeesController {

    @Autowired
    private RefugeeService refugeeService;
}
