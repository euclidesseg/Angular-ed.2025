import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from "../../components/search-component/search.component";
import { TableComponent } from "../../components/table-component/table.component";

@Component({
  selector: 'app-by-capital',
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-capital.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { 

  onSearch(querySearch:string){
    console.log({querySearch})
  }

}
