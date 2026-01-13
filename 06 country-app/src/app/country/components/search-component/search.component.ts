import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
})
export class SearchComponent { 

    strSearch = output<string>();

    onSearch(query:string){
      this.strSearch.emit(query);
    }

}
