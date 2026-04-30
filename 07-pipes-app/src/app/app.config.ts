import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection,LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es'
import localEn from '@angular/common/locales/en'
import localFr from '@angular/common/locales/fr'
import { LocaleService } from './services/locale.service';

// Registrar los datos de localización para los idiomas español, inglés y francés
registerLocaleData(localEs,'es');
registerLocaleData(localEn,'en');
registerLocaleData(localFr,'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    // Proporcionar el LOCALE_ID utilizando una fábrica que depende del LocaleService para obtener el locale actual dinámicamente
    {
      provide: LOCALE_ID,
      // useValue: 'es',
      deps: [LocaleService],
      useFactory:(localservice:LocaleService) => localservice.getLocale
    }
  ]
};
