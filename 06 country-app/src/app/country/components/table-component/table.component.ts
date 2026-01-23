import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
})
export class TableComponent {

  countries = input.required<Country[]>();
  
 }
