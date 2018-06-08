import { Component } from "@angular/core";

// routerLinkActive... if the link or nested link is active, assign class active to the elem
@Component({
    selector: 'app-header',
    template:`
        <header class="row mb-5">
        <nav class="col-md-8 col-offset-2">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" [routerLink]="['/color']">Color Palette</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" [routerLink]="['/order']">Make an Order</a>
                </li>
            </ul>
        </nav>
    `
})

export class HeaderComponent{

}