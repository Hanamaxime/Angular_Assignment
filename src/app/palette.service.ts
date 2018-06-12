// 2. define a service. set data and make it observable (next: palettes.component.ts)

import { Injectable } from '@angular/core';
import { Palette } from "./palettes/palette.model";
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private palettes:Palette[] = [
    new Palette(1, 'spring theme', ['#ff5454', '#fcffbf', '#c5d6a2'], false),
    new Palette(2, 'summer theme', ['#ff6302', '#019eff', '#52ff4c'], true),
    new Palette(3, 'autumn theme', ['#dd9166', '#822525', '#466652'], false),
    new Palette(4, 'winter theme', ['#16253d', '#fffcf7', '#458e80'], false),
  ];

  constructor() { }

  
  getPalettes():Observable <Palette[]>{
    return of(this.palettes);
  }
  addPalette(p:Palette){
    p.id = this.palettes.length + 1;
    this.palettes.push(p);
  }
}


