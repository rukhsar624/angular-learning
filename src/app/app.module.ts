import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerveagesComponent } from './berveages/berveages.component';
import { UserComponent } from './user/user.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { UxPipe } from './pipes/ux.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BerveagesComponent,
    UserComponent,
    UsdInrPipe,
    UxPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
