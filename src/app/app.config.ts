import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home';
import { AcademyComponent } from './academy/academy';
import { ShopComponent } from './shop/shop';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      [
        { path: '', component: HomeComponent },
        { path: 'academy', component: AcademyComponent },
        { path: 'shop', component: ShopComponent },
        { path: '**', redirectTo: '' }
      ],
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding()
    )
  ]
};
