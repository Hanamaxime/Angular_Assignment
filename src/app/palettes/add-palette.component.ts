import { Component, } from "@angular/core";
import { NgForm } from "@angular/forms";


import { Palette } from "./palette.model";
import { PaletteService } from "../palette.service";


@Component({
    selector: 'add-palette',
    templateUrl: './add-palette.component.html',
    styles: ['./add-palette.component.css']
})

export class AddPaletteComponent{
    constructor(private paletteService:PaletteService){}

    theme_name:string;
    main_color:string;
    accent_color1:string;
    accent_color2:string;

    onSubmit(){
        const p = new Palette(null, this.theme_name, [this.main_color, this.accent_color1, this.accent_color2], false);
        this.paletteService.addPalette(p);

        // clear the values
        this.theme_name = this.main_color = this.accent_color1 = this.accent_color2 = null;
    }

}
