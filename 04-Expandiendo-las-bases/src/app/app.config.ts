import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // strategy esto es ideal para contruir y desplegar la aplicación en un hosting ideal para que las rutas no se pierdan
    // al recargar el sitio web construido
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ]
};
