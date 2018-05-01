import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignaturePadModule } from 'angular2-signaturepad';

import { HttpClientModule }    from '@angular/common/http';

import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

// Services
import { SignpadService } from './signpad.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    SignaturePadModule, 
    BrowserAnimationsModule, 
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [
    SignpadService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
