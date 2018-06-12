// 5. use @Input to accept the incoming value from palettes.component.html
// now @Input() palette:Palette has one palette that is coming from palettes.component.html
// (next: palette.component.html)

import { Component, Input, OnInit,  } from "@angular/core";

import { Palette } from "./palette.model";

@Component({
    selector: 'app-palette',
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit{
    ngOnInit(): void {
        // console.log(this.palette);
    }

    @Input() palette: Palette;
    // test:string = 'tomato';
}
