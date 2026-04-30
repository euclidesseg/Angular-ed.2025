import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocaleService {
   

    private currentLocale = signal<'es'|'en'|'fr'>('es');

    constructor() {
        this.currentLocale.set(localStorage.getItem('locale') as 'es'|'en'|'fr') ?? 'es'; 

     }


    get getLocale(){
        return this.currentLocale();
    }
    
    changeLocale(locale:'es'|'en'|'fr'){
        localStorage.setItem('locale',locale);
        this.currentLocale.set(locale);
        window.location.reload();
    }
}