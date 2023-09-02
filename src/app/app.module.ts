import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { YouamiComponent } from './youami/youami.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input';
import { InputListComponent } from './components/input-list/input-list.component';


@NgModule({
  declarations: [
    AppComponent,
    YouamiComponent,
    InputListComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
