import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FlightTicketComponent } from './flight-ticket/flight-ticket.component';
import { HompageComponent } from './hompage/hompage.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CabsComponent } from './cabs/cabs.component';

export const routes: Routes = [
    {
        path:"flightticket",
        component:FlightTicketComponent
        
    },{
        path:"",
        component:HompageComponent

    },
    {
        path:"hotels",
        component:HotelsComponent

    },{
        path:"cab",
        component:CabsComponent
    }
];
