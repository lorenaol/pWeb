package com.pWeb.proiect.Core.SeedWork;

public abstract class DomainOfAggregate<TAggregate> {

    private TAggregate aggregate;

    public DomainOfAggregate(TAggregate aggregate)
    {
        this.aggregate = aggregate;
    }


}
