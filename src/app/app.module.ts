import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { OrderComponent } from './order/order.component';

// Those two are for the navigation
import { HeaderComponent } from './header.component';
import { routing } from './app-routing';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    OrderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
