// 1. define a model (next: palette.service.ts)

export class Palette{

    // shorter way to construct a class. ? is an optional param (e.g. isFav?:)
    constructor(
        public id:number,
        public paletteName:string,
        public colors:string[],
        public isFav:boolean = false,
    ){}
}

