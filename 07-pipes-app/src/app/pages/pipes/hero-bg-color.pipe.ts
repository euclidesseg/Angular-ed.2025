import { Pipe, PipeTransform } from "@angular/core";
import { Color, ColorMap } from "../../interfaces/hero.interface";

@Pipe({
    name:'heroBgColor'
}) 
export class HeroBgColorPipe implements PipeTransform{
    transform(value: Color, ...args: any[]): string {
        return ColorMap[value];
    }                               
}