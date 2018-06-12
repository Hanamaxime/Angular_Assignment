// 3. get(subscribe) the data from palette service (next: palettes.component.html)

import { Component, OnInit } from '@angular/core';
import { Palette } from './palette.model';
import { PaletteService } from '../palette.service';

@Component({
  selector: 'app-palettes',
  templateUrl: './palettes.component.html',
})
export class PalettesComponent implements OnInit {

  palettes: Palette[];

  constructor(private paletteService:PaletteService) { }

  ngOnInit() {
    this.getPalette();
  }

  getPalette(){
    this.paletteService
    .getPalettes()
    .subscribe(data => this.palettes = data);
  }

}
