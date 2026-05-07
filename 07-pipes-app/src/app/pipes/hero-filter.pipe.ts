import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
    name:'heroFilter'
})
export class HeroFilterPipe implements PipeTransform{
    transform(heroes: Hero[], query:string):Hero[] {
        if(!query) return heroes;

        query = query.toLocaleLowerCase();

        return heroes.filter(hero => hero.name.toLocaleLowerCase().includes(query))
    }

}