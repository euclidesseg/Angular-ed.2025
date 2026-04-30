import { Pipe, PipeTransform } from "@angular/core";
import { ColorMap } from "../../interfaces/hero.interface";
import { Color } from "../../interfaces/hero.interface";

@Pipe({
    name:'heroColor'
})
export class HeroColorPipe implements PipeTransform{
    transform(value: Color, ...args: any[]):string {
        return Color[value];
    }
}   