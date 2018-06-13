import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';

// Palettes
import { PalettesComponent } from './palettes/palettes.component';
import { PaletteComponent } from './palettes/palette.component';
import { AddPaletteComponent } from './palettes/add-palette.component';
import { ColorPickerModule } from 'ngx-color-picker';

// Those two are for the navigation
import { HeaderComponent } from './header.component';
import { routing } from './app-routing';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    HeaderComponent,
    PalettesComponent,
    PaletteComponent,
    AddPaletteComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
