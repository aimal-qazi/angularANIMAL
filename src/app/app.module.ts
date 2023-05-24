import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllAnimalsComponent } from './animal/all-animals/all-animals.component';
import { FiveAnimalsComponent } from './animal/five-animals/five-animals.component';

@NgModule({
  declarations: [AppComponent, AllAnimalsComponent, FiveAnimalsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'all',
        component: AllAnimalsComponent,
      },
      {
        path: 'five',
        component: FiveAnimalsComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
