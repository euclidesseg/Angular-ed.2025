import { Component, input, signal } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './table.component.html',
})
export class TableComponent {

  countries = input.required<Country[]>();
  
  erorMessage = input<Error | string | undefined>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
 }
