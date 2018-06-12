import { Routes, RouterModule } from "@angular/router";
import { PalettesComponent } from "./palettes/palettes.component";
import { OrderComponent } from "./order/order.component";

// type Routes is provided by ng
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/palettes', pathMatch: 'full'},
    {path: 'palettes', component: PalettesComponent},
    {path: 'order', component: OrderComponent},
];

// let ng know those routes (also need to add to app.module)
export const routing = RouterModule.forRoot(APP_ROUTES);