import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  imports: [],
  templateUrl: './by-capital.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { 

  onSearch(querySearch:string){
    console.log({querySearch})
  }

}
