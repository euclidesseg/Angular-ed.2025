import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '../../components/table-component/table.component';

@Component({
  imports: [TableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { 

  onSearch(query:string){
    console.log(query)
  }
 }
