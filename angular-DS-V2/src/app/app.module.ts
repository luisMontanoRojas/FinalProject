import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandItemComponent } from './components/brand/brand-item/brand-item.component';
import { BrandEditComponent } from './components/brand/brand-edit/brand-edit.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandSearchComponent } from './components/brand/brand-search/brand-search.component';
import { ModelListComponent } from './components/carmodel/model-list/model-list.component';
import { ModelItemComponent } from './components/carmodel/model-item/model-item.component';
import { ModelSearchComponent } from './components/carmodel/model-search/model-search.component';
import { ModelEditComponent } from './components/carmodel/model-edit/model-edit.component';
import { ModelAddComponent } from './components/carmodel/model-add/model-add.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModelSalesComponent } from './components/carmodel/model-sales/model-sales.component';
import { ModelSalesItemComponent } from './components/carmodel/model-sales-item/model-sales-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BrandListComponent,
    BrandItemComponent,
    BrandEditComponent,
    BrandAddComponent,
    BrandSearchComponent,
    ModelListComponent,
    ModelItemComponent,
    ModelSearchComponent,
    ModelEditComponent,
    ModelAddComponent,
    ModelSalesComponent,
    ModelSalesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
