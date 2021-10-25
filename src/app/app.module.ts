import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxSoapModule, NgxSoapService } from 'ngx-soap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPagination, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


@NgModule({  
  declarations: [
    AppComponent,
     
      
  ],
  imports: [    
    NgxSoapModule,
    NgbModule ,
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
     
  ],
  providers: [NgxSoapService,NgbPaginationConfig],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
