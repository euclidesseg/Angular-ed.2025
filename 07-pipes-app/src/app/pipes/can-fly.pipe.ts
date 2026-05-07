import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'canFly'
})
export class CanFlyPipe implements PipeTransform{
    transform(value: boolean, ...args: any[]): string {
        return value? 'Si puede volar': 'No puede voloar'
    }
}