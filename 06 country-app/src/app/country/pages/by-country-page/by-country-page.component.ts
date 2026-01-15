import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search-component/search.component";
import { TableComponent } from '../../components/table-component/table.component';

@Component({
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent { 

   onSearch(querySearch:string){
    console.log({querySearch})
  }

  
 }
